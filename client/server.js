const express = require('express');
const app = express();
const port = 3000;
const ip = '0.0.0.0';

app.get('/', (req, res) => res.status(200).send('Hello world!'));
app.get('/ping', (req, res) => res.status(200).json({ says: 'pong'}));

app.listen(port, ip, () => console.log(`Server listening on port ${port}...!`));
