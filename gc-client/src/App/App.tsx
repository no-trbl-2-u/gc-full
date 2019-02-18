import React from 'react';
import LandingPage from '../Layout/LandingPage';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

 const client = new ApolloClient({
   uri: 'http://express-server:4000/graphql',
 })

function App () {
  return (
    <ApolloProvider client={ client } >
      <section>
        <LandingPage />
      </section>
    </ApolloProvider>
  )
}

export default App