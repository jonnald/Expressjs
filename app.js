const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.status(200).send("Contacts Page");
});

app.post("/contacts", (req, res) => {
    res.status(201).send("Create Contacts");
});

app.listen(port, () => {
    console.log(`${port}번 포트에서 서버 실행 중`);
});
