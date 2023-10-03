const express = require('express');

const app = express();

console.log("it works");

app.get("/", (req, res) => {
    res.send("HELLO");
});

app.listen(8080, () => {
    console.log("Listening on port: 8080")
})