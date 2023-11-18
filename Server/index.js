const express = require("express");
const app = express();

app.get("/",(req,res) => {
    res.send("Express Port Running .....")
})

require('dotenv').config();
const Port = process.env.Port;
app.listen(Port,() => {
    console.log("Express Port Running .....");
})

app.use(express.json());
const cors = require("cors");
app.use(cors());

const router = require('./DataBase/Router/Router')
app.use('/api',router)

const UserRouter = require('./DataBase/Router/UserRoute')
app.use('/admin',UserRouter)

const mongoose = require("mongoose");
const ConnectDB = () => {
    try {
        mongoose.connect(`${process.env.DBurl}/Results`);
        console.log("DataBase Connected ......");
    } catch (error) {
        console.log(error.message);
    }
}
ConnectDB()