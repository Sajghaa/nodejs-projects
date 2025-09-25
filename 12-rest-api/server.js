const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let items = [];
let id = 1;

app.post('/items', (req, res) => {
  const item = { id: id++, ...req.body };
  items.push(item);
  res.status(201).json(item);
});

app.get('/items', (req, res) => {
  res.json(items);
});

app.get('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });
  res.json(item);
});

app.put('/items/:id', (req, res) => {
  const item = items.find(i => i.id == req.params.id);
  if (!item) return res.status(404).json({ message: 'Item not found' });

  Object.assign(item, req.body);
  res.json(item);
});

app.delete('/items/:id', (req, res) => {
  const index = items.findIndex(i => i.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Item not found' });

  items.splice(index, 1);
  res.json({ message: 'Item deleted' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
