const express = require("express");
const app = express();
const path = require("path");
let port = 8080;

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));

let posts = [
  {
    username : "sohansamanta18",
    content : "I love Coding"
  },
  {
    username : "sintu11",
    content : "Time is most expensive thing"
  },
  {
    username : "sohansamanta11",
    content : "I got my Job"
  }
];

app.get("/posts", (req,res) => {
  res.render("index.ejs", {posts});
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});