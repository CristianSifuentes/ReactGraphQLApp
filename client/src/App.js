import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';
import ApolloClient from 'apollo-boost';

//componentes
import Header from './componentes/Header'

const client = new ApolloClient({
  uri: "http:localhost:4000/graphql",
  onError: ({networkError, graphQlErrors}) => {
    console.log('graphQLErrors', graphQlErrors);
    console.log('networkError', networkError);
  }
});



class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
         <Header/>
      </ApolloProvider>
    );
  }
}

export default App;
