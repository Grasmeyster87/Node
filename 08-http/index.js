const http = require('http');
const { getHTML, getText, getComments, handleNotFound } = require('./handlers.js');
const PORT = 5000;

const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/html') {
        return getHTML(req, res);
    }

    if (req.method === 'GET' && req.url === '/text') {
        return getText(req, res);
    }

    if (req.method === 'GET' && req.url === '/comments') {
        getComments(req, res);
    }
    handleNotFound(req, res);
});

server.listen(PORT, () => {
    console.log(`Server was launched on port ${PORT}`);
});

// thunder client install