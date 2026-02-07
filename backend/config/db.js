const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "taskflow",
  password: "123",
  port: 5432
});

pool.connect()
  .then(() => console.log("Connected to PostgreSQL ✅"))
  .catch(err => console.error("Postgres connection error ❌", err));

module.exports = pool;
