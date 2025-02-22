import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose.connect(process.env.MONGO_URL);

const PORT = process.env.PORT || 3005;

app.get()

const app = express();
app.listen(3005, () => {
    console.log("Server is running on port 3005");
})