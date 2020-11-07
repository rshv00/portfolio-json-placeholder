const jsonServer = require('json-server');
const server = jsonServer.create();
const port = process.env.PORT || 4000;

server.use('/api', jsonServer.router('db.json'));

server.listen(port);
