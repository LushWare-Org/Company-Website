const crypto = require('crypto');

// Simple in-memory store for sessions (in production, use Redis or database)
const sessions = new Map();

// Admin credentials (in production, store in database with hashed passwords)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'admin123';

/**
 * Admin Login
 */
const adminLogin = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Validation
    if (!username || !password) {
      return res.status(400).json({
        message: "Username and password are required"
      });
    }

    // Check credentials
    if (username !== ADMIN_USERNAME || password !== ADMIN_PASSWORD) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    // Generate session token
    const sessionToken = crypto.randomBytes(32).toString('hex');
    const sessionData = {
      username,
      createdAt: new Date(),
      expiresAt: new Date(Date.now() + 24 * 60 * 60 * 1000) // 24 hours
    };

    sessions.set(sessionToken, sessionData);

    res.json({
      message: "Login successful",
      sessionToken,
      username
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      message: "Error during login",
      error: error.message
    });
  }
};

/**
 * Admin Logout
 */
const adminLogout = async (req, res) => {
  try {
    const { sessionToken } = req.body;

    if (sessionToken && sessions.has(sessionToken)) {
      sessions.delete(sessionToken);
    }

    res.json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error during logout:", error);
    res.status(500).json({
      message: "Error during logout",
      error: error.message
    });
  }
};

/**
 * Verify session token
 */
const verifySession = (sessionToken) => {
  if (!sessionToken) return false;
  
  const session = sessions.get(sessionToken);
  if (!session) return false;

  // Check if session is expired
  if (new Date() > session.expiresAt) {
    sessions.delete(sessionToken);
    return false;
  }

  return true;
};

module.exports = {
  adminLogin,
  adminLogout,
  verifySession
};
