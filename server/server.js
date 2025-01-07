import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";
import authRoute from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/auth", authRoute);

app.listen(port, () => {
  databaseConnection();
  console.log(`Server is running on http://localhost:${port}`);
});
