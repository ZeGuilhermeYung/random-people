import express from "express";
import "express-async-errors";
import cors from "cors";
import router from "./routes/index";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(router);

app.listen(5000, () => console.log(`Server is up and running or port 5000`));