/**
 * Admin Dashboard API Service
 * Handles all API calls for the admin panel
 */

const API_BASE_URL = `${import.meta.env.VITE_API_URL}/api`;

/**
 * Fetch all inquiries
 */
export const fetchAllInquiries = async (token: string) => {
  const response = await fetch(`${API_BASE_URL}/inquiries`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch inquiries');
  }

  return await response.json();
};

/**
 * Get single inquiry by ID
 */
export const getInquiryById = async (id: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}/inquiries/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch inquiry');
  }

  return await response.json();
};

/**
 * Update inquiry status (seen/not-seen)
 */
export const updateInquiryStatus = async (id: string, status: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}/inquiries/${id}/status`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ status })
  });

  if (!response.ok) {
    throw new Error('Failed to update status');
  }

  return await response.json();
};

/**
 * Get inquiries by type
 */
export const getInquiriesByType = async (type: string, token: string) => {
  const response = await fetch(`${API_BASE_URL}/inquiries/type/${type}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    throw new Error('Failed to fetch inquiries by type');
  }

  return await response.json();
};

/**
 * Admin login
 */
export const adminLogin = async (username: string, password: string) => {
  const response = await fetch(`${API_BASE_URL}/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  });

  if (!response.ok) {
    throw new Error('Invalid credentials');
  }

  return await response.json();
};

/**
 * Admin logout
 */
export const adminLogout = async () => {
  const response = await fetch(`${API_BASE_URL}/admin/logout`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (!response.ok) {
    throw new Error('Logout failed');
  }

  return await response.json();
};
