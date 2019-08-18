const fs = require('fs');
const https = require('https');
const express = require('express');

const httpsOptions = {
    cert: fs.readFileSync('../secrets/ssl/taylour_dev.crt'),
    ca: fs.readFileSync('../secrets/ssl/taylour_dev.ca-bundle'),
    key: fs.readFileSync('../secrets/ssl/taylour_dev.key')
};

const hostname = 'taylour.dev';
const httpsPort = 443;
// const ip = '0.0.0.0';

const app = express();
const httpsServer = https.createServer(httpsOptions, app);

app.get('/', (req, res) => res.status(200).send('Hello world!'));
app.get('/ping', (req, res) => res.status(200).json({ says: 'pong'}));

// app.listen(httpsPort, ip, () => console.log(`Server listening on httpsPort ${httpsPort}...!`));
httpsServer.listen(httpsPort, hostname, () => console.log(`Server listening on httpsPort ${httpsPort}...!`));