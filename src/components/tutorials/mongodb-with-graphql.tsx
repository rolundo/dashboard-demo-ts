import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function MongoDBWithGraphQLTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            Before setting up our Apollo server, we need to define the types for
            the records we will be fetching from our mongo database. For this
            example, we will be fetching customer records so we define the
            Customer type and the Query type:
          </Typography>
          <Highlighter
            codeString={`
              const typeDefs = gql\`
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
              \`
            `}
          />
          <Typography paragraph>
            Then we define our resolvers to handle our customer query:
          </Typography>
          <Highlighter
            codeString={`
              const resolvers = {
                Query: {
                  customers(_parent, _args, _context, _info) {
                    return _context.db.collection('customers').find().toArray()
                  },
                },
              }
            `}
          />
          <Typography paragraph>
            After building our schema, we can use this schema in our server
            initialization. We will create a new Apollo server with our defined
            schema and include a connection to our Mongo database using
            MongoClient:
          </Typography>
          <Highlighter
            codeString={`
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
                        // mongoDB connection string
                        \`
                          mongodb+srv://\${process.env.MONGODB_USERNAME}:
                          \${process.env.MONGODB_PASSWORD}@
                          \${process.env.MONGODB_CLUSTERNAME}.eu825.mongodb.net/
                          \${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority
                        \`,
                        {
                          useNewUrlParser: true,
                          useUnifiedTopology: true,
                        }
                      )
              
                      // Connect to the client if not already connected
                      if (!dbClient.isConnected()) await dbClient.connect()
                      // Connect to specific database
                      db = dbClient.db(process.env.MONGODB_DATABASE)
                    } catch (error) {
                      console.log(\`Error while connecting with graphql context(db): \${error}\`)
                      throw new Error(
                        \`Error while connecting with graphql context(db): \${error}\`
                      )
                    }
                  }
              
                  return { db }
                },
              })
            `}
          />
          <Typography paragraph>
            After the server has been created, we can now execute a graphQL
            query from within our getServerSideProps function. To query the
            customers collection, we include the name of the collection along
            with the fields we want to fetch:
          </Typography>
          <Highlighter
            codeString={`
              export async function getServerSideProps() {
                const response = await axios.get(
                  \`\${process.env.SERVER}/api/graphql?query={customers{ 
                    _id, 
                    name, 
                    city, 
                    state, 
                    country, 
                    orders, 
                    spent, 
                    latitude, 
                    longitude 
                  }}\`
                )
              
                return {
                  props: {
                    customers: response.data.data.customers,
                  },
                }
              }
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
