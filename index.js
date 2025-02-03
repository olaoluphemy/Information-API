const dotenv = require("dotenv");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { getUserDetails } = require("./controllers/userController");

dotenv.config({ path: "./config.env" });

// 1) App
const app = express();

// 2) Middlewares
app.use(cors());
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use((req, res, next) => {
  if (req.method !== "GET")
    return res.status(405).json({
      status: "fail",
      message: "Request type is not allowed!",
    });

  next();
});

// 3) Routes
app.route("/api/v1/user").get(getUserDetails);

// 4) Server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
