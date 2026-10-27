/**
 * Unified Inquiry Service
 * Handles all inquiry form submissions across:
 * - Solutions Page (Industry-based)
 * - Project Base (Project-based)
 * - Free Tech Consultation
 *
 * Performance features:
 *   - 10-second AbortController request timeout
 *   - In-flight de-duplication guard (prevents double-submit races)
 *   - "processing" email status treated as success (async background emails)
 */



export type InquiryType = 'solution' | 'project' | 'consultation';
const BACKEND_URL = import.meta.env.VITE_API_URL;

/** Tracks emails currently being submitted to prevent duplicate in-flight requests */
const _inFlight = new Set<string>();

type EmailDeliveryStatus = 'sent' | 'failed' | 'processing';

interface SubmitInquiryApiResponse {
  message: string;
  id?: string;
  emailStatus?: {
    adminNotification?: EmailDeliveryStatus;
    userConfirmation?: EmailDeliveryStatus;
  };
}

export interface InquiryFormData {
  // Common fields
  firstName?: string;
  lastName?: string;
  fullName?: string;
  email: string;
  country?: string;
  /** ISO 3166-1 alpha-2 code for `country`. */
  countryCode?: string;
  /** Page the inquiry was sent from, and that page's target market (src/data/markets.ts). */
  sourcePath?: string;
  market?: string;
  budget?: string;
  whatsapp?: string;
  inquiryType: InquiryType;
  
  // Solution-specific fields
  industry?: string;
  requirements?: string;
  
  // Project-specific fields
  project?: string;
  teamMembers?: string;
  message?: string;
  
  // Additional fields
  organization?: string;
}

/**
 * Submit an inquiry to the backend.
 * The server saves to MongoDB and responds immediately; emails are sent
 * asynchronously server-side so the user never waits for SMTP.
 */
export const submitInquiry = async (data: InquiryFormData): Promise<{ success: boolean; message: string; id?: string }> => {
  try {
    // ── Basic field validation ─────────────────────────────────────────────
    if (!data.email || !data.inquiryType) {
      throw new Error("Missing required fields");
    }

    // Resolve name fields: support both firstName/lastName and fullName
    let firstName = (data.firstName || "").trim();
    let lastName = (data.lastName || "").trim();

    if (data.fullName && !firstName && !lastName) {
      const [first, ...rest] = data.fullName.trim().split(/\s+/);
      firstName = first || "";
      lastName = rest.join(" ");
    }

    if (!firstName) {
      throw new Error("First name or full name is required");
    }

    // Inquiry-type-specific validations on client side
    if (data.inquiryType === 'consultation') {
      if (!data.budget) {
        throw new Error("Budget is required for consultation");
      }
    } else {
      if (!data.country || !data.whatsapp) {
        throw new Error("Geography and WhatsApp number are required");
      }
    }

    // ── Duplicate in-flight guard ──────────────────────────────────────────
    // Prevents the same email from submitting twice if the user rapidly
    // double-clicks or the component re-renders during the request.
    const dedupKey = `${data.email}::${data.inquiryType}`;
    if (_inFlight.has(dedupKey)) {
      throw new Error('A submission is already in progress. Please wait.');
    }
    _inFlight.add(dedupKey);

    // Build payload - only include relevant fields based on inquiry type
    const payload = {
      firstName,
      lastName,
      email: data.email.trim(),
      country: data.country?.trim() || null,
      countryCode: data.countryCode?.trim().toUpperCase() || null,
      sourcePath: data.sourcePath || null,
      market: data.market || null,
      budget: data.budget?.trim() || null,
      whatsapp: data.whatsapp?.trim() || null,
      inquiryType: data.inquiryType,
      organization: data.organization?.trim() || null,
      submittedAt: new Date().toISOString(),
      
      // Solution inquiry fields
      ...(data.inquiryType === 'solution' && {
        industry: data.industry?.trim() || null,
        requirements: data.requirements?.trim() || null,
      }),
      
      // Project inquiry fields
      ...(data.inquiryType === 'project' && {
        project: data.project?.trim() || null,
        teamMembers: data.teamMembers?.trim() || null,
        message: data.message?.trim() || null,
      }),
      
      // Consultation inquiry fields
      ...(data.inquiryType === 'consultation' && {
        message: data.message?.trim() || null,
      }),
    };

    // ── Request with 10-second hard timeout ───────────────────────────────
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10_000);

    let response: Response;
    try {
      response = await fetch(`${BACKEND_URL}/api/inquiries`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } catch (fetchErr: unknown) {
      if (fetchErr instanceof Error && fetchErr.name === 'AbortError') {
        throw new Error('Request timed out. Please check your connection and try again.');
      }
      throw fetchErr;
    } finally {
      clearTimeout(timeoutId);
      _inFlight.delete(dedupKey); // Always release the guard
    }

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || "Failed to submit inquiry");
    }

    const result: SubmitInquiryApiResponse = await response.json();

    const adminEmailStatus = result.emailStatus?.adminNotification;
    const userEmailStatus = result.emailStatus?.userConfirmation;

    // "processing" = emails are running async in the background — this is the
    // happy path. Only "failed" warrants a warning.
    console.log('[Inquiry] Submission successful:', {
      inquiryId: result.id,
      emailStatus: {
        adminNotification: adminEmailStatus ?? 'unknown',
        userConfirmation: userEmailStatus ?? 'unknown',
      },
      note: adminEmailStatus === 'processing' ? 'Emails are being dispatched in the background' : undefined,
    });

    if (adminEmailStatus === 'failed' || userEmailStatus === 'failed') {
      console.warn('[Inquiry] Email delivery failed. Check server logs for SMTP error details.');
    }
    
    return {
      success: true,
      message: "Inquiry submitted successfully",
      id: result.id,
    };
  } catch (error) {
    console.error("Error submitting inquiry:", error);
    const errorMessage = error instanceof Error ? error.message : "An unexpected error occurred";
    
    return {
      success: false,
      message: errorMessage,
    };
  }
};

/**
 * Validate email format
 */
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

/**
 * Validate phone number (basic validation)
 */
export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[0-9+\-\s()]{7,}$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};
