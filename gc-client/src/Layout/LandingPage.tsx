import React, { useEffect } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

// Relevant Components
import Header from '../Components/Header';

// TODO: Set up Apollo client

const getAccount = gql`
  {
    accounts {
      username,
      email
    }
  }
`


function LandingPage (props: any) {

  // Data from Client
  const { accounts, loading } = props.data

  // Mounted/Updated
  useEffect(() => console.log(
    `Accounts: ${accounts}
     Loading: ${loading}`
  ))

  return (
    <section className="Layout">
      <Header />
      <p>Here is a p tag</p>
      <p>Here is another p tag</p>
      {
        loading 
        ? <h2>Loading</h2>
        : <h2>Account { accounts[0] }</h2>
      }
    </section>
  )
}

export default graphql(getAccount)(LandingPage);