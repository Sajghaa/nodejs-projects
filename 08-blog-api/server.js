const express = require("express");
const { Low } = require("lowdb");
const { JSONFile } = require("lowdb/node");

const app = express();
const PORT = 5000;

const adapter = new JSONFile("db.json");
const db = new Low(adapter, { posts: [] });

(async () => {
  await db.read();
})();

app.use(express.json());

app.get("/posts", (req, res) => {
  res.json(db.data.posts);
});

app.get("/posts/:id", (req, res) => {
  const post = db.data.posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });
  res.json(post);
});

app.post("/posts", async (req, res) => {
  const newPost = {
    id: db.data.posts.length ? db.data.posts[db.data.posts.length - 1].id + 1 : 1,
    title: req.body.title,
    content: req.body.content
  };
  db.data.posts.push(newPost);
  await db.write();
  res.status(201).json(newPost);
});

app.put("/posts/:id", async (req, res) => {
  const post = db.data.posts.find(p => p.id === parseInt(req.params.id));
  if (!post) return res.status(404).json({ message: "Post not found" });

  post.title = req.body.title ?? post.title;
  post.content = req.body.content ?? post.content;

  await db.write();
  res.json(post);
});

app.delete("/posts/:id", async (req, res) => {
  const index = db.data.posts.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "Post not found" });

  db.data.posts.splice(index, 1);
  await db.write();
  res.json({ message: "Post deleted successfully" });
});

app.listen(PORT, () => {
  console.log(` Blog API running at http://localhost:${PORT}`);
});
