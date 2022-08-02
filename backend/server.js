
const express = require('express');
const https = require('https');
const fs = require('fs');
const app = express();

// HTTPS certificates
const httpsOptions = {
    key: fs.readFileSync('./backend/security/localhost+2-key.pem'),
    cert: fs.readFileSync('./backend/security/localhost+2.pem')
};

// Default route
app.get('/', (req, res) => {
    res.send("Hello world!");
});

// Create https server
const server = https.createServer(httpsOptions, app);

// Listen on port 4000
server.listen(4000, () => console.log("HTTPS server listening on port 4000!"));