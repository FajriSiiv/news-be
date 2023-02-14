import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import routerNews from "./routes/News.js";
import cors from "cors";

const app = express();
const port = 5000;
dotenv.config();

const accMongo = process.env.NODE_ACC;

mongoose.connect(accMongo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Database Connected..."));

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(routerNews);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
