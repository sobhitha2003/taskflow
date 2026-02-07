const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const pool = require("../config/db");

exports.loginUser = async (req, res) => {
  try {
    let { email, password } = req.body;

    // 🔴 Normalize input (VERY IMPORTANT)
    email = email.trim().toLowerCase();
    password = password.trim();

    console.log("LOGIN ATTEMPT:", email);

    const result = await pool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );

    if (result.rows.length === 0) {
      console.log("USER NOT FOUND");
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const user = result.rows[0];

    console.log("DB HASH:", user.password);
    console.log("INPUT PASSWORD:", password);

    const isMatch = await bcrypt.compare(password, user.password);

    console.log("PASSWORD MATCH:", isMatch);

    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });

    return res.json({
      message: "Login successful",
      role: user.role
    });

  } catch (error) {
    console.error("LOGIN ERROR:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
