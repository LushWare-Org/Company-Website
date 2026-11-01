const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const inquiryRoutes = require("./routes/inquiries");
const adminRoutes = require("./routes/admin");
const blogRoutes = require("./routes/blog");

const app = express();
const port = process.env.PORT || 5000;

// Verify SMTP configuration on startup
if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
  console.warn('⚠️  WARNING: SMTP configuration incomplete. Email notifications will fail.');
  console.warn('   Missing:', [
    !process.env.SMTP_HOST && 'SMTP_HOST',
    !process.env.SMTP_USER && 'SMTP_USER', 
    !process.env.SMTP_PASS && 'SMTP_PASS'
  ].filter(Boolean).join(', '));
} else {
  console.log('✓ SMTP configuration loaded');
}

// CORS Configuration for production
const allowedOrigins = [
  'http://localhost:5173',
  'http://localhost:5000',
  'https://lushware.vercel.app',
  'https://lushware-api.vercel.app',
  'https://lushware.net',
  'https://www.lushware.net',
  'https://api.lushware.net'
];

const isAllowedOrigin = (origin) => {
  if (!origin) return true;

  if (allowedOrigins.includes(origin)) {
    return true;
  }

  try {
    const { hostname, protocol } = new URL(origin);
    return protocol === 'https:' && hostname.endsWith('.lushware.net');
  } catch (error) {
    return false;
  }
};

const corsOptions = {
  origin: function (origin, callback) {
    console.log(`[CORS] Request from origin: ${origin || 'no-origin'}`);
    
    // Allow requests with no origin (like mobile apps or Postman)
    if (isAllowedOrigin(origin)) {
      console.log(`[CORS] ✓ Origin allowed: ${origin || 'no-origin'}`);
      callback(null, true);
    } else {
      console.warn(`[CORS] ✗ Origin blocked: ${origin}`);
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Content-Length', 'Content-Type'],
  optionsSuccessStatus: 204,
  preflightContinue: false
};

// Middleware
app.use(cors(corsOptions));  // Handles all CORS including OPTIONS preflight

app.use(express.json({ limit: '2mb' }));     // Parse JSON bodies (blog posts can be long)

// --------------------------
// MongoDB Connection
// --------------------------
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ MongoDB connected successfully"))
.catch(err => console.error("❌ MongoDB connection error:", err));

// --------------------------
// Test route to check DB
// --------------------------

app.get("/api", async (req, res) => {
  try {
    // Simple check: get list of collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({
      message: "Backend is working and MongoDB is connected!",
      collections: collections.map(c => c.name)
    });
  } catch (err) {
    res.status(500).json({ message: "Error checking DB connection", error: err.message });
  }
});

// --------------------------
// Routes
// --------------------------
// Health check route
app.get("/", (req, res) => {
  res.json({ 
    status: "Server is running",
    message: "LushWare API is operational",
    timestamp: new Date().toISOString()
  });
});

// Mount inquiry routes
app.use("/api/inquiries", inquiryRoutes);

// Mount admin routes
app.use("/api/admin", adminRoutes);

// Mount blog routes (public posts + admin editor)
app.use("/api/blog", blogRoutes);

// --------------------------
// Error handling middleware - ensure CORS headers on errors
// --------------------------
app.use((err, req, res, next) => {
  console.error('Express error:', err);
  
  // Set CORS headers even on error
  const origin = req.headers.origin;
  if (isAllowedOrigin(origin)) {
    res.header('Access-Control-Allow-Origin', origin || '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }
  
  res.status(err.status || 500).json({
    message: err.message || 'Internal server error',
    error: process.env.NODE_ENV === 'production' ? {} : err
  });
});

// --------------------------
// Start server (skip in production for serverless platforms)
// --------------------------
if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
  });
}

// Export for Vercel serverless
module.exports = app;
