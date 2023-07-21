const http = require('http');

/**
 * @callback createServer 
 * This callback creates a webserver using node js function
 * @argument req This is the request from client
 * @argument res This is the server response
 */
const server = http.createServer((req, res) => {
    res.write('Hola Mundo');
    res.end();
}).listen(8080);

console.log(`Listening with port 8080`);