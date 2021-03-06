import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
const typeDefs = `
    type Query {
        greeting(name: String!, position: String): String!
        add(a: Float!, b: Float!): Float!
        me: User!
        post: Post!
    }

    type User {
        id: ID!
        name: String!
        email: String!
        age: Int
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        published: Boolean!
    }`

// Resolvers
const resolvers = {
    Query: {
        greeting(parent, args, ctx, info) {

            console.log(args)

            if(args.name && args.position) {
                return  `Hello ${args.name}! You are my favorite ${args.position}`
            }
            else {
                return 'Hello!'
            }

        },

        add(parent, args, ctx, info) {
            console.log(args)
            return args.a + args.b
        },

        me() {
            return {
                id: '123098',
                name: 'Mike',
                email: 'mike@example.com',
                age: 28
            }
        },

        post() {
            return {
                id: '092',
                title: 'A title',
                body: 'A body',
                published: true
            }
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