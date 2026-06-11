import express from "express";
import cors from "cors";
import router from "./routes";
const app = express();
app.use("/api", router);
app.use(cors());
app.use(express.json());

export default app;