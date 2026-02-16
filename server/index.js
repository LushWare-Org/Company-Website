const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const inquiryRoutes = require("./routes/inquiries");
const adminRoutes = require("./routes/admin");

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
    // Allow requests with no origin (like mobile apps or Postman)
    if (isAllowedOrigin(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 204
};

// Middleware
app.use(cors(corsOptions));  // Allow requests from frontend with proper config

app.use(express.json());     // Parse JSON bodies

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
