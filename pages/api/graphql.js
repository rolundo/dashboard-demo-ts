import { ApolloServer, gql } from 'apollo-server-micro'
import { makeExecutableSchema } from 'graphql-tools'
import { MongoClient, ObjectID } from 'mongodb'

const typeDefs = gql`
  type Customer {
    _id: ID!
    name: String!
    city: String!
    state: String
    country: String!
    orders: Int!
    spent: Float!
    latitude: Float
    longitude: Float
  }

  type Query {
    customers: [Customer]!
  }

  input CustomerInput {
    _id: ID
    orders: Float!
    spent: Float!
  }

  type Mutation {
    updateCustomer(_id: String, orders: Float, spent: Float): Customer
  }
`

const resolvers = {
  Query: {
    customers(_parent, _args, _context, _info) {
      return _context.db.collection('customers').find().toArray()
    },
  },
  Mutation: {
    updateCustomer(_parent, _args, _context, _info) {
      const query = { _id: ObjectID(_args._id) }
      const update = { $set: { orders: _args.orders, spent: _args.spent } }
      const options = { returnNewDocument: true }

      return _context.db
        .collection('customers')
        .findOneAndUpdate(query, update, options)
        .then((data) => {
          return data.value
        })
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

let db

const apolloServer = new ApolloServer({
  schema,
  context: async () => {
    if (!db) {
      try {
        const dbClient = new MongoClient(
          `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_CLUSTERNAME}.eu825.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`,
          {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          }
        )

        if (!dbClient.isConnected()) await dbClient.connect()
        db = dbClient.db(process.env.MONGODB_DATABASE)
      } catch (error) {
        console.log(`Error while connecting with graphql context(db): ${error}`)
        throw new Error(
          `Error while connecting with graphql context(db): ${error}`
        )
      }
    }

    return { db }
  },
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
