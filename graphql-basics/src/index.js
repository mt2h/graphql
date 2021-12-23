import { GraphQLServer } from 'graphql-yoga'

// Type definitions (schema)
/*const typeDefs = `
    type Query {
        hello: String!
        name: String!
        location: String!
        bio: String!
    }*/
    
/*const typeDefs = `
    type Query {
        id: ID!
        name: String!
        age: Int!
        employed: Boolean!
        gpa: Float
    }
`*/

/*const typeDefs = `
    type Query {
        title: String!
        price: Float!
        releaseYear: Int
        rating: Float
        inStock: Boolean!
    }
`*/

const typeDefs = `
    type Query {
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
    }
`

// Resolvers
/*const resolvers = {
    Query: {
        hello() {
            return 'This is my first query!'
        },
        name() {
            return 'Andrew Mead'
        },
        location() {
            return 'Philadelphia'
        },
        bio() {
            return 'I live in Philly and teach on Udemy!'
        }
    }
}*/

/*const resolvers = {
    Query: {
        id() {
            return 'abc123'
        },
        name() {
            return 'Mt2h'
        },
        age() {
            return 27
        },
        employed() {
            return true
        },
        gpa() {
            return null //3.1
        }
    }
}*/

/*const resolvers = {
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
}*/

const resolvers = {
    Query: {
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