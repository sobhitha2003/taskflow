const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const testRoutes = require("./routes/testRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

// ✅ CLEAN & CORRECT CORS
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://taskflow-frontend-4ug0nsdtt-sobhitha2003s-projects.vercel.app"
    ],
    credentials: true
  })
);

app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);

// Health check
app.get("/", (req, res) => {
  res.send("TaskFlow Backend Running 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
