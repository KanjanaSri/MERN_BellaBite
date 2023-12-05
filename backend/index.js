const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const authController = require("./controllers/authController");
const productController = require("./controllers/productController");
const uploadController = require("./controllers/uploadController");
const app = express();

// connect our db
mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("DB is successfully connected"));

// routes & middlewares
// fix error from runing on differnt ports (server on 4000 / client on 3000)
app.use(cors());
// those two middlewares make req.body accessible, otherwise it will be undefined !
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/auth", authController);
app.use("/product", productController);
app.use("/upload", uploadController);

// start our server
app.listen(process.env.PORT, () =>
  console.log(`Server has been started on PORT ${process.env.PORT}`)
);
