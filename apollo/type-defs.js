import gql from 'graphql-tag';

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type GithubUser {
    id: String!
    name: String!
    html_url: String!
    status: String!
  }

  type Query {
    gitUsers: [GithubUser]!
    gitUser(id: String!): GithubUser
  }
`;
