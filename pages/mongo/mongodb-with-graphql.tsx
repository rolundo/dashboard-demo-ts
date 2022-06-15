import { Fragment, useState } from 'react'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
import MaterialTable from '../../src/components/ui/material-table'
import Jumbotron from '../../src/components/ui/jumbotron'
import { resetServerContext } from 'react-beautiful-dnd'
import Typography from '@material-ui/core/Typography'
import axios from 'axios'
import { Customer } from '../../src/types'
import MongoDBWithGraphQLTutorial from '../../src/components/tutorials/mongodb-with-graphql'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    height: '50vh',
    backgroundColor: theme.palette.primary.main,
  },
}))

const columns = [
  { field: '_id', title: 'ID', hidden: true, editable: 'never' },
  { field: 'name', title: 'Name', editable: 'never' },
  { field: 'city', title: 'City', editable: 'never' },
  { field: 'state', title: 'State', editable: 'never' },
  { field: 'country', title: 'Country', editable: 'never' },
  { field: 'orders', title: 'Orders' },
  { field: 'spent', title: 'Spent', type: 'currency' },
]

type Props = {
  customers: Customer[]
}

export default function Customers({ customers }: Props) {
  const classes = useStyles()
  const [customerList, setCustomerList] = useState(customers)

  const customerTable = () => {
    return (
      <MaterialTable
        data={customerList}
        setData={setCustomerList}
        columns={columns}
      />
    )
  }

  return (
    <Fragment>
      <Container maxWidth='md' component='main' className={classes.container}>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='MongoDB/GraphQL/Apollo'
              summary={`In this example, we will be creating an Apollo server to query our MongoDB database using GraphQL.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            {/* <Paper className={classes.paper}> */}
            {customerTable()}
            {/* </Paper> */}
          </Grid>
        </Grid>
      </Container>
      <MongoDBWithGraphQLTutorial />
    </Fragment>
  )
}

export async function getServerSideProps() {
  // Needed so react-beautiful-dnd does not break during render
  resetServerContext()

  const response = await axios.get(
    `${process.env.SERVER}/api/graphql?query={customers{ _id, name, city, state, country, orders, spent, latitude, longitude }}`
  )

  return {
    props: {
      customers: response.data.data.customers,
    },
  }
}
