const appName = require('./../package').name;
const http = require('http');
const express = require('express');
const localConfig = require('./config/local.json');

const app = express();
const server = http.createServer(app);

app.use(express.static(__dirname + 'public'));
app.use('/', express.static(__dirname + '/public'));
require('./routers/index')(app, server);


const port = process.env.PORT || localConfig.port;
server.listen(port, function(){
  console.log(`Server Running on Port:` + port);
});

module.exports = server;
