const express = require("express");
const { nanoid } = require("nanoid");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index", {});
});

app.listen(7000, function () {
  console.log("server has started on port 7000");
});

// const express = require("express");
// const { nanoid } = require("nanoid");
// const { MongoClient } = require("mongoDb");

// const app = express();
// app.use(express.json());
// app.use(express.urlencoded());
// app.set("view engine", "ejs");

// let db;

// app.get("/", function (req, res) {
//   res.render("index", {});
// });

// const client = new MongoClient(
//   "mongodb+srv://sarthakk24:9818122469SsS@cluster0.uibzn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
// );

// app.listen(7000, function () {
//   console.log("server started on port 7000");
// });
