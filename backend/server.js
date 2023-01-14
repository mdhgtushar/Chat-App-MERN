const express = require("express");//require express
const userModel = require("./models/userModel")
const app = express();//create app instance
const cors = require("cors");//require cors
app.use(cors());//use cors middleware
app.use(express.json());//parsse json for request midlw
const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/chat-app", (err) => !err ? console.log("db conneted") : console.log("db not connected"))

app.post("/api/login", async (req, res) => {
    const { email, password } = req.body;
    const find = await userModel.findOne({ email, password });
    find ? res.send({ success: true }) : res.send({ success: false })
})

app.post("/api/register", async (req, res) => {
    const { fullname, email, password } = req.body;
    const save = await userModel.create({ fullname, email, password });
    save ? res.send({ success: true }) : res.send({ success: false })
})

app.listen(5000, (err) => {
    !err ? console.log("server running port: 5000") : console.log("server not running");
})