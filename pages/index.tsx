import React from 'react'
import { Container, Grid, makeStyles, Typography } from '@material-ui/core'

import EarningsCard from '../src/components/cards/earnings'
import WalletCard from '../src/components/cards/wallet'
import ActivityCard from '../src/components/cards/activity'
import InboxCard from '../src/components/cards/inbox'
import BalanceCard from '../src/components/cards/balance'
import TransactionsCard from '../src/components/cards/transactions'
import HelpCard from '../src/components/cards/help'

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
    height: '275px',
  },
}))

export default function Dashboard() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' className={classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography component='h1' variant='subtitle1'>
            Overview
          </Typography>
          <Typography component='h1' variant='h4'>
            Good Morning, Rolando
          </Typography>
          <Typography component='h1' variant='subtitle1'>
            {`Here's what's happening with your projects today`}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <EarningsCard />
        </Grid>
        <Grid item xs={12} md={6}>
          <WalletCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <ActivityCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <BalanceCard />
        </Grid>
        <Grid item xs={12} md={8}>
          <TransactionsCard />
        </Grid>
        <Grid item xs={12} md={4}>
          <InboxCard />
        </Grid>
        <Grid item xs={12}>
          <HelpCard />
        </Grid>
      </Grid>
    </Container>
  )
}
