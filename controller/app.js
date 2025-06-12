const express = require("express");
const app = express();
const path = require("node:path");

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date(),
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date(),
    },
];

const assetsPath = path.join(__dirname, "../public");
app.use(express.static(assetsPath));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "../views"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    console.log("at / right now");
    res.render("index", { title: "Dan's message board", messages: messages });
});

app.get("/new", (req, res) => {
    console.log("at /new right now");
    res.render("./post/postMessage");
});

app.post("/new", (req, res) => {
    messageText = req.body.message;
    messageUser = req.body.name;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
