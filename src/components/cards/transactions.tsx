import React, { Fragment } from 'react'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'

import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'

import { List, ListItem, ListItemText } from '@material-ui/core'
import { Box } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    // backgroundColor: theme.palette.primary.main,
  },
  paper: {
    marginTop: theme.spacing(2),
    height: '300px',
  },
}))

const transactions = [
  {
    id: 0,
    date: new Date(2021, 6, 6),
    client: 'Material UI',
    type: 'Payment Sent',
    amount: -2800.0,
    currency: 'USD',
  },
  {
    id: 1,
    date: new Date(2021, 6, 5),
    client: 'Company A',
    type: 'Payment Received',
    amount: 1762.45,
    currency: 'USD',
  },
  {
    id: 2,
    date: new Date(2021, 6, 5),
    client: 'MongoDB',
    type: 'Payment sent',
    amount: -45.99,
    currency: 'USD',
  },
  {
    id: 3,
    date: new Date(2021, 6, 4),
    client: 'Health Works',
    type: 'Payment Received',
    amount: 1340.1,
    currency: 'USD',
  },
  {
    id: 4,
    date: new Date(2021, 6, 4),
    client: 'Amazon',
    type: 'Payment Received',
    amount: 1660.1,
    currency: 'USD',
  },
  {
    id: 5,
    date: new Date(2021, 6, 4),
    client: 'UPS',
    type: 'Payment Sent',
    amount: -32.1,
    currency: 'USD',
  },
]

export default function TransactionsCard() {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      {/* @ts-ignore */}
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell colSpan={3}>
              <Typography variant='h5' component='h1'>
                Latest Transactions
              </Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell component='th' scope='row'>
                <Box>
                  <Typography variant='h6' component='h2' align='center'>
                    {transaction.date.toLocaleString('default', {
                      month: 'short',
                    })}
                  </Typography>
                  <Typography variant='h6' component='h2' align='center'>
                    {transaction.date.getUTCDate()}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align='right'>
                <div>
                  <Typography variant='h6' component='h2' align='left'>
                    {transaction.client}
                  </Typography>
                  <Typography variant='subtitle2' component='h2' align='left'>
                    {transaction.type}
                  </Typography>
                </div>
              </TableCell>
              <TableCell align='right'>
                <div>
                  <Typography
                    variant='h6'
                    component='h2'
                    style={{
                      color: transaction.amount > 0 ? '#07b324' : '#e63e32',
                    }}
                  >
                    {transaction.amount}
                  </Typography>
                  <Typography variant='body2' component='h4'>
                    {transaction.currency}
                  </Typography>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
