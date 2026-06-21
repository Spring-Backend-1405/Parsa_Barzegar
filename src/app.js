import express from "express";

const app = express();

app.use(express.json());

app.use("/" , (req,res) => {
    res.json({
        message:"this is just for test"
    })
})

export default app;
