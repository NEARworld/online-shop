const fileUpload = require("express-fileupload");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const express = require("express");
const routes = require("./routes")
const cors = require("cors");
require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(fileUpload({}));
app.use(routes)

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