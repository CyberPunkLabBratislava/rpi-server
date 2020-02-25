// Raspberry server

// ** Start Imports **
// Import main server packages
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var http = require('http');

// Load configuration file
var config = require('./configuration/configuration');

// Load loggers
var morgan = require('morgan');
var logger = require('./util/logger');

// Load routes
var api = require('./api/routes/routes');

//** End imports **

// Instantiate server app
var app = express();

// Middlewares
app.use(cors({origin:'*'}));
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }));
app.use(morgan(':status - :date[iso] - :method - :url - :response-time - :remote-addr', { "stream": logger.stream}));

//** API **

// Routes available under api/routes
app.use('/api', api);
// Not found request response
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'});
});

// Start server
var server = http.createServer(app);
server.listen(config.port, () => logger.info(new Date().toISOString() + " - Raspberry server initialized on port " + config.port));

// Export app module
module.exports = app;

