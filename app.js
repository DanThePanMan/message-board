const express = require("express");
const app = express();
const path = require("node:path");

const assetsPath = path.join(__dirname, "./public");

const db = require("./model/db");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "./views"));
app.set("view engine", "ejs");

app.get("/", async (req, res) => {
    console.log("at / right now");
    const messages = await db.getMessages();
    console.log(messages);
    res.render("index", { title: "Dan's message board", messages: messages });
});

app.get("/new", (req, res) => {
    console.log("at /new right now");
    res.render("./post/postMessage");
});

app.post("/new", (req, res) => {
    messageText = req.body.message;
    messageUser = req.body.name;
    db.postMessages(messageUser, messageText);
    res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
