const graphQL = require('graphql');

// Models/Collections
const Account = require('../Models/Account')

// GraphQL Types
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLSchema
} = graphQL

// Account Type
const AccountType = new GraphQLObjectType({
  name: 'Account',
  fields: () => ({
    id: {type: GraphQLID},
    username: {type: GraphQLString},
    password: {type: GraphQLString},
    email: {type: GraphQLString}
  })
});


// Root
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {

    // A Single Account
    account: {
      type: AccountType,
      args: {id: {type: GraphQLID}},
      resolve(_, args) {
        return Account.findById(args.id)
      }
    },

    // All Accounts
    accounts: {
      type: GraphQLList(AccountType),
      resolve(_, __) {
        return Account.find({})
      }
    },

  }
})

// Mutation Procedure
const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {

    // ADD ACCOUNT
    addAccount: {
      type: AccountType,
      args: {
        username: {type: GraphQLString},
        password: {type: GraphQLString},
        email: {type: GraphQLString}
      },

      // ADD ACCOUNT - RESOLVE
      resolve(_, args) {
        let newAccount = new Account({
          username: args.username,
          password: args.password,
          email: args.email
        })
        
        return newAccount.save()
      }
    }

  }
  
})


module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
})