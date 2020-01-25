import gql from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    status: String!
  }

  type GithubUser {
    id: ID!
    name: String!
    html_url: String!
    status: String!
  }

  type Query {
    viewer: User
    git_user(id: ID!): GithubUser
  }
`;
