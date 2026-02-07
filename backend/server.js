const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ UPDATED CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ UPDATED CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://taskflow-frontend.vercel.app" // 👈 replace with your Vercel URL
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
"
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running ");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
