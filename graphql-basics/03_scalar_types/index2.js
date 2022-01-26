import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }`

// Resolvers
const resolvers = {
    Query: {
        title() {
            return "A title"
        },
        price() {
            return 20.5
        },
        releaseYear() {
            return 2021
        },
        rating() {
            return 1
        },
        inStock() {
            return false
        }
    }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers
})

server.start(() => {
    console.log('The server is up!')
})