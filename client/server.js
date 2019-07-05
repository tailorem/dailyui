const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.status(200).json({ hey: 'plan\'t'}));

app.listen(port, () => console.log(`Server listening on port ${port}...!`));