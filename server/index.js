require('dotenv').config();
const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 7000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(fileUpload({}));
// app.use("api");

const start = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => {
            console.log(`Started on port ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();