const { verifySession } = require("../controllers/adminController");

/**
 * Middleware to verify admin authentication
 */
const adminAuthMiddleware = (req, res, next) => {
  const sessionToken = req.headers['authorization']?.replace('Bearer ', '');

  if (!sessionToken || !verifySession(sessionToken)) {
    return res.status(401).json({
      message: "Unauthorized: Invalid or missing session token"
    });
  }

  req.adminSessionToken = sessionToken;
  next();
};

module.exports = adminAuthMiddleware;
