import { createServer } from 'node:http';

const server = createServer((request, response) => {
    if (request.url === '/user') {
        response.writeHead(200, { 'content-type': 'application/json' });
        response.end(JSON.stringify({
            name: 'Alex Bessa',
            email: 'alex@gmail.com'
        }, null, 2));
    } else {
        response.writeHead(404, { 'content-type': 'application/json' });
        response.end(JSON.stringify({
            message: 'Recurso não encontrado'
        }, null, 2));
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});