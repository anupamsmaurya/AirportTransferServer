const { ApolloServer, gql } = require('apollo-server');
const typeDefs = gql`
  type Query {
    allBookings: [Booking!]!
  }
  type Booking {
    id: ID!
    fullname: String!
    mobile: String!
    arrivalDate: String!
    flight: String!
    airport: String!
    terminal: String
  }
  input BookingInput {
    fullname: String!
    mobile: String!
    arrivalDate: String!
    flight: String!
    airport: String!
    terminal: String
  }
  type Mutation {
    createBooking(fullname: String!, mobile: String!, arrivalDate: String!, flight: String!, airport: String!, terminal: String): ID
  }
`;


const server = new ApolloServer({
  typeDefs,
  mocks: true
});

server.listen().then(({ url }) => console.log(`Server running on ${url}`));

