/** @format */
console.clear();

import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoute.js";
import { postRouter } from "./routes/postRoute.js";
import { myError } from "./Errors/error.js";
import { categoryRouter } from "./routes/categoriesRoute.js";

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
    myError(err);
  }
});

app.use("/api", userRouter);
app.use("/api", postRouter);
app.use("/api", categoryRouter);
app.use(myError);
