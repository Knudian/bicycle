const http = require('http');

const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end('test');
});
server.listen(6500);