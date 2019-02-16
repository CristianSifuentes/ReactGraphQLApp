// var express = require('express');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

// // Construct a schema, using GraphQL schema language
// var schema = buildSchema(`
//   type Query {
//     hello: String
//   }
// `);

// // The root provides a resolver function for each API endpoint
// var root = {
//   hello: () => {
//     return 'Hello world!';
//   },
// };

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000);
// console.log('Running a GraphQL API server at localhost:4000/graphql');




 import express from 'express';

 //importar
 import graphqlHTTP  from 'express-graphql';
 import schema from './schema';

 const app = express();

 app.get('/', (req, res) => {
   res.send('Todo listo');
 });


 //Resolver
const root = {
  hola: () => "Hola mundo desde graphql" 
}

app.use('/graphql', graphqlHTTP({
  //Que schema va a utilizar
  schema: schema, 
  //el resolver se pasa como rootValue
  rootValue: root,
  //y utilizar graphical
  graphiql : true

}));
console.log('Server running at http://127.0.0.1:1337/');


// app.listen(8090, () => console.log('El servidor está funcionando'));

// import http from 'http';

// http.createServer((req, res) => {
//   res.writeHead(200, {'Content-Type': 'text/plain'});
//   res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');

// console.log('Server running at http://127.0.0.1:1337/');