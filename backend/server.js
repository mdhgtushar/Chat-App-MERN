const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost:27017/chat-application", (err) => {
    if (!err) {
        console.log("mongodb connected");
    } else {
        console.log("mongodb not connected")
    }
})


app.get("/", (req, res) => {
    res.send("hello")
})


app.listen(5000, (err) => {
    if (!err) {
        console.log("server running");
    } else {
        console.log("server not running")
    }
})