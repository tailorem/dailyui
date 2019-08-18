const fs = require('fs');
const https = require('https');
const express = require('express');

const httpsOptions = {
  cert: fs.readFileSync('../secrets/ssl/taylour_dev.crt'),
  ca: fs.readFileSync('../secrets/ssl/taylour_dev.ca-bundle'),
  key: fs.readFileSync('../secrets/ssl/taylour_dev.key')
};

const hostname = 'localhost';
const httpsPort = 3000;

const app = express();
const httpsServer = https.createServer(httpsOptions, app);

app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => res.status(200).sendFile('index.html', { root: '.' }));
app.get('/ping', (req, res) => res.status(200).json({ says: 'pong'}));
app.get('/dailyui/:id');

// Temporary 404 handler for non-existent routes redirects to '/'
app.use((req, res) => {
  res.status(404).redirect("/");
});

app.listen(httpsPort, hostname, () => console.log(`Server listening on port ${httpsPort}...!`));