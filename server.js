const express = require('express');

const app = express();

app.get('/api/kunden', (req, res) => {
    const kunden = [
        { id: 1, name: 'Hans', age: 45 },
        { id: 2, name: 'Maik', age: 23 },
        { id: 3, name: 'John', age: 56 },
    ];

    res.json(kunden);
});

const port = 5000;

app.listen(port, () => console.log(`Server runs at port ${port}`));

