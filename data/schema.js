// import {buildSchema} from "graphql";

// // const schema = buildSchema(`
  
// //   `);

// export default schema;


import { resolvers } from './resolvers';
import { importSchema } from 'graphql-import';
import { makeExecutableSchema  } from 'graphql-tools';

const typeDefs = importSchema('data/schema.graphql');

const schema = makeExecutableSchema({typeDefs, resolvers});

export { schema };