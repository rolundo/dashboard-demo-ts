import React, { Fragment, useEffect, useState } from 'react'
import Link from 'next/link'
import MaterialLink from '@material-ui/core/Link'
import { Container, Grid, makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'

import LineChart from '../src/components/charts/line-chart'
import PieChart from '../src/components/charts/pie-chart'
import getOrders from './api/chart-data'
import { Order } from '../src/types'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    // backgroundColor: theme.palette.primary.main,
  },
  table: {
    minWidth: 650,
  },
  seeMore: { marginTop: theme.spacing(3) },
  link: {
    color: '#fff',
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}))

export default function Orders() {
  const classes = useStyles()
  const [orders, setOrders] = useState<Order[]>([])

  useEffect(() => {
    setOrders(getOrders())
  }, [])

  const table = () => {
    return (
      <Fragment>
        <Table className={classes.table} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align='right'>Name</TableCell>
              <TableCell align='right'>Ship To</TableCell>
              <TableCell align='right'>Payment Method</TableCell>
              <TableCell align='right'>Sale Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.name}>
                <TableCell component='th' scope='row'>
                  {order.date}
                </TableCell>
                <TableCell align='right'>{order.name}</TableCell>
                <TableCell align='right'>{order.ship_to}</TableCell>
                <TableCell align='right'>{order.payment_method}</TableCell>
                <TableCell align='right'>{order.sale_amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className={classes.seeMore}>
          <MaterialLink color='secondary' href='#'>
            See more orders
          </MaterialLink>
        </div>
      </Fragment>
    )
  }

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography component='h1' variant='h4'>
            Orders
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>{table()}</Paper>
        </Grid>
        <Grid item xs={12} md={8} lg={9} xl={9}>
          <Paper className={classes.paper} style={{ height: '300px' }}>
            <LineChart />
          </Paper>
        </Grid>
        <Grid item xs={12} md={4} lg={3} xl={3}>
          <Paper className={classes.paper} style={{ height: '300px' }}>
            <PieChart />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  )
}
