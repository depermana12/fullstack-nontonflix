const express = require("express");
const path = require("path");

require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const indexRouter = require("./routes/indexRouter");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);

app.listen(port, () => {
  console.log("Server running");
});
