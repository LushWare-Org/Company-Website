const { verifyToken } = require("../controllers/adminController");

/**
 * Middleware to verify admin authentication using JWT
 */
const adminAuthMiddleware = (req, res, next) => {
  const token = req.headers['authorization']?.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized: No token provided"
    });
  }

  const decoded = verifyToken(token);
  
  if (!decoded) {
    return res.status(401).json({
      message: "Unauthorized: Invalid or expired token"
    });
  }

  req.admin = decoded;
  next();
};

module.exports = adminAuthMiddleware;
