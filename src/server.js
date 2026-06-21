import app from "./app.js";
import "dotenv/config"

const PORT = process.env.PORT

app.use((err, req, res, next) => {
  if (err && err.success === false) {
    return res.status(err.statusCode || 400).json(err);
  }
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    statusCode,
    success: false,
    message: err.message || "خطای داخلی سرور",
    data: null,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, console.log(`server is running on port ${PORT}`));
