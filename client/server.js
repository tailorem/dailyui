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

const app = express();
const httpsServer = https.createServer(httpsOptions, app);

app.use(express.static('./public'));

// Routes
app.get('/', (req, res) => res.status(200).sendFile('./public/index.html', { root: 'public/' }));
app.get('/ping', (req, res) => res.status(200).json({ says: 'pong'}));

// Temporary 404 handler for non-existent routes redirects to '/'
app.use((req, res) => {
  res.status(404).redirect("/");
});

httpsServer.listen(httpsPort, hostname, () => console.log(`Server listening on port ${httpsPort}...!`));