const express = require("express");
const { adminLogin, adminLogout } = require("../controllers/adminController");

const router = express.Router();

/**
 * Admin Authentication Routes
 */
// POST - Admin login
router.post("/login", adminLogin);

// POST - Admin logout
router.post("/logout", adminLogout);

module.exports = router;
