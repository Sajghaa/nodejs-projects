const express = require('express');
const app = express();
const PORT =5000;

function logger(req, res, nex){
    const now = new Date();

    console.log(`[${now.toISOString()}] ${req.method} ${req.url}`)
    nex();
};

app.use(logger);

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) =>{
    res.send('This is the About Page.')
});

app.get('/api/data', (req, res) =>{
    res.json({message: "Here is some JSON data"})
});

app.listen(PORT, () =>{
    console.log(`Server running at http://localhost:${PORT}`);
});