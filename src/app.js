import express from "express";
import authRouter from "./module/auth/auth.router.js";

const app = express();

app.use(express.json());

app.use("/auth", authRouter);

app.use("/", (req, res) => {
  res.json({
    message: "this is just for test",
  });
});

export default app;
