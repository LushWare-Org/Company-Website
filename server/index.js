const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config(); // Load .env variables

const inquiryRoutes = require("./routes/inquiries");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());          // Allow requests from frontend
app.use(express.json());  // Parse JSON bodies

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
// Mount inquiry routes
app.use("/api/inquiries", inquiryRoutes);

// --------------------------
// Start server
// --------------------------


app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
});
