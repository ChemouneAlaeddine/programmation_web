const morgan = require('morgan'); // Middleware de logging

app.use(morgan('combined'));

app.get('/', function(req, res) {
  res.send('Root');
}).listen(8080);