/** @format */
console.clear();

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoute.js";
import { postRouter } from "./routes/postRoute.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  try {
    console.log(`Server is running on ${PORT}!`);
  } catch (err) {
    console.log(err);
  }
});

app.use("/api", userRouter);
app.use("/api", postRouter);
