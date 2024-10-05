import http from 'http';
import fs from 'fs';

const server = http.createServer((req, res) => {
    // With streams
    if (req.url === '/' && req.method === 'GET') {
        const filePath = './files/index.html';
        const readStream = fs.createReadStream(filePath);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        readStream.pipe(res);
    }
    // Without streams. We read entire file and then it to the client
    if (req.url === '/no-stream' && req.method === 'GET') {
        const filePath = './files/index.html';
        fs.readFile(filePath, (err, data) => {
            if (err) {
                res.statusCode = 500;
                res.end('Error reading file on server');
            } else {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/html');
                res.end(data);
            }
        });
    }
});

server.listen(5000, () => {
    console.log('Server is listening at port 5000');
});