import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

//componentes
import Header from './componentes/Header'
import Clientes from './componentes/Clientes'

// const client = new ApolloClient({
//   uri: "http:localhost:4000/graphql",
//   onError: ({networkError, graphQlErrors}) => {
//     console.log('graphQLErrors', graphQlErrors);
//     console.log('networkError', networkError);
//   }
// });

const customFetch = (uri, options) => {
  return fetch(uri, options)
  .then(response => {
    if (response.status >= 500) {  // or handle 400 errors
      return Promise.reject(response.status);
    }
    return response;
  });
};
const client = new ApolloClient({
  link: createHttpLink({
    uri: "http://localhost.com:4000/graphql",
    fetch: customFetch,
  }),
  cache: new InMemoryCache()
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <Header/>
         <div className="container">
            <Clientes />
         </div>
        
      </ApolloProvider>
    );
  }
}

export default App;
