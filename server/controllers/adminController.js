const jwt = require('jsonwebtoken');

// Admin credentials (loaded from environment variables)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;
const JWT_SECRET = process.env.JWT_SECRET;

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

    // Generate JWT token
    const token = jwt.sign(
      { 
        username,
        role: 'admin'
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      message: "Login successful",
      token,
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
    // With JWT, logout is handled client-side by removing the token
    // No server-side session to delete
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
 * Verify JWT token
 */
const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = {
  adminLogin,
  adminLogout,
  verifyToken
};
