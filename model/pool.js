const { Pool } = require("pg");
require("dotenv").config(); // Load env vars from .env in root

const ct = process.env.DATABASE;
module.exports = new Pool({
    connectionString: ct,
    ssl: { rejectUnauthorized: false },
});
