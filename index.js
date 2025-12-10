const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const { v4 : uuidv4 } = require ("uuid");
const methodOverride = require("method-override");

app.use(express.urlencoded({extended: true}));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname,"/views"));

app.use(express.static(path.join(__dirname,"/public")));
app.use(methodOverride('_method'));

let posts = [
  {
    id : uuidv4(),
    username : "sohansamanta18",
    content : "I love Coding"
  },
  {
    id : uuidv4(),
    username : "sintu11",
    content : "Time is most expensive thing"
  },
  {
    id : uuidv4(),
    username : "sohansamanta11",
    content : "I got my Job"
  }
];

app.get("/", (req,res) => {
  res.send("Welcome to Quora App");
});

app.get("/posts", (req,res) => {
  res.render("index.ejs", {posts});
});

app.get("/posts/new", (req,res) => {
  res.render("new.ejs");
});

app.post("/posts", (req,res) => {
  let {username, content} = req.body;
  let id = uuidv4();
  posts.push({id, username, content});
  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", {post});
})

app.get("/posts/:id", (req,res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("show.ejs", {post});
});

app.patch("/posts/:id", (req, res) => {
  let {id} = req.params;
  let post = posts.find((p) => id === p.id);
  if (!post) {
    return res.status(404).send("Post not found");
  }
  post.content = req.body.content;
  console.log(post);
  res.redirect("/posts");
});

app.delete("/posts/:id", (req, res) => {
  let {id} = req.params;
  posts = posts.filter((p) => id !== p.id);
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});