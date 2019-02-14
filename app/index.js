 import express from 'express';

 const app = express();

 app.get('/', (req, res) => {
   res.send('Todo listo');
 });

console.log('Server running at http://127.0.0.1:1337/');


// app.listen(8090, () => console.log('El servidor está funcionando'));

// import http from 'http';

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');