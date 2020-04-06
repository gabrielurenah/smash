import { gql } from 'apollo-server';

const typeDefs = gql`
  type Player {
    fullName: String!
    id: ID!
    playerTag: String!
  }

  type Query {
    players: [Player!]!
  }
`;

export default typeDefs;
