const express = require("express");
const { nanoid } = require("nanoid");
const { MongoClient } = require("mongoDb");

const app = express();
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");

let db;

app.get("/", function (req, res) {
  res.render("index", {});
});

app.get("/:slug", function (req, res) {
  console.log(req.params.slug);
  db.collection("contactInfo")
    .findOne({ id: req.params.slug })
    .then(function (document) {
      res.render("contactDisplay", {
        name: document.name,
        phone: document.phone,
        email: document.email,
        portfolio: document.portfolio,
      });
    })
    .catch(function (err) {
      console.error(err);
      res.send("cant find the matching pair");
    });
});

app.post("/api/newcontact", function (req, res) {
  const res_obj = req.body;

  const id = nanoid(5);
  const name = res_obj.name;
  const phone = res_obj.phone;
  const email = res_obj.email;
  const portfolio = res_obj.portfolio;
  console.log(res_obj);

  db.collection("contactInfo")
    .insertOne({ id, name, phone, email, portfolio })
    .then(() => {
      res.json({ id });
    });
});

const client = new MongoClient("");

client.connect().then((mClient) => {
  db = mClient.db();
  console.log("Mongo client Connected");
  app.listen(7000, function () {
    console.log("server started on port 7000");
  });
});
