const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.end('Welcome to Calculator API');
});

app.get('/add', (req, res) => {
    const {a, b} =  req.query;
    if(!a || !b) return res.status(400).json({error: "Provide a and b"})
    const results =  Number(a) + Number(b);
    res.json({operation: "addition", results});
});

app.get('/subtract', (req, res) => {
    const {a, b} =  req.query;
    if(!a || !b) return res.status(400).json({error: "Provide a and b"})
    const results =  Number(a) - Number(b);
    res.json({operation: "subtraction", results});
});

app.get('/multiply', (req, res) => {
    const {a, b} =  req.query;
    if(!a || !b) return res.status(400).json({error: "Provide a and b"})
    const results =  Number(a) * Number(b);
    res.json({operation: "multiplication", results});
});

app.get('/divide', (req, res) => {
    const {a, b} =  req.query;
    if(!a || !b) return res.status(400).json({error: "Provide a and b"})
    const results =  Number(a) / Number(b);
    res.json({operation: "division", results});
});

app.listen(PORT, () => {
    console.log(`Calculator API running on http://localhost:${PORT}`); 
});