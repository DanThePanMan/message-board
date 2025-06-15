const pool = require("./pool");

async function getMessages() {
    const { rows } = await pool.query("SELECT * FROM messages");
    return rows;
}

async function postMessages(name, message) {
    await pool.query(
        "INSERT INTO messages (text, name, added) VALUES ($1, $2, $3)",
        [message, name, new Date()]
    );
}

module.exports = { getMessages, postMessages };
