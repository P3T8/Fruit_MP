/*fruit nyilvantartasa*/

const port = 3000;
const express = require('express');
const app = express();
app.use(express.json());
let fruit = [
    { id: 0, fruit: "apple", size: "Large", color: "red" }
];

app.get('/', (req, res) => {
    res.header('Content-Type', 'text/html; charset=utf-8');
    res.status(201);
    res.send('Helló Express!');
});

// osszes fruit lekerdezese
app.get('/fruit', (req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200);
    res.json(fruit);
});

// uj fruit letrehozasa
app.post('/fruit', (req, res) => {
    console.log(req.body);
    let newFruit = req.body;
    fruit.push(newFruit);
    res.send(`The newFruit adatai: v: ${newFruit.fruit}, k: ${newFruit.size}, f: ${newFruit.large}`);

});

// fruit modositasa
app.put('/fruit/:id', (req, res) => {
    console.log(req.params.id);
    let id = req.params.id;
    let newFruit = req.body;
    fruit[id] = newFruit;
    res.send(`A modosított fruit adatai: v: ${newFruit.fruit}, k: ${newFruit.size}, f: ${newFruit.large}`);
});
//-- fruit torlese
app.delete('/fruit/:id', (req, res) => {
    let id = req.params.id;
    fruit.splice(id, 1);
    res.send(`A törlendő fruit adatai: v: ${fruit[id].fruit}, k: ${fruit[id].size}, f: ${fruit[id].large}`);
});
app.listen(port, () => {
    console.log(`Express szerver indítva. Port: ${port}`);
});