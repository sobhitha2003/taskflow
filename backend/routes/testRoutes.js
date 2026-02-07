const express = require("express");
const { protect, authorize } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/admin", protect, authorize("admin"), (req, res) => {
  res.json({ message: "Welcome Admin 👑" });
});

router.get("/manager", protect, authorize("manager"), (req, res) => {
  res.json({ message: "Welcome Manager 👨‍💼" });
});

router.get("/user", protect, authorize("user"), (req, res) => {
  res.json({ message: "Welcome User 👩‍💻" });
});

module.exports = router;
