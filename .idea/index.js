const express = require('express');
const bodyParser = require('body-parser');
const {randomBytes} = require('crypto');

const app = express();
app.use(bodyParser.json()); //Um mit JSON Format arbeiten zu können müssen wir body-parser importieren (im Request Body)


const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString('hex'); //Import RandomBytes um die Eindeutige Id zu erstellen
    const {title} = req.body;

    posts[id] = { //Erstelle ein Post und retuniere den Post mit dem Status 201
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});