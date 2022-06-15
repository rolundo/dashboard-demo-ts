import { Fragment } from 'react'
import { Container, Grid, GridSize, makeStyles, Paper } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import LinearProgress from '@material-ui/core/LinearProgress'

import NewOldCustomers from '../src/components/charts/new-old-customers'
import NewVisitors from '../src/components/charts/new-visitors'
import { Metric } from '../src/types'

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
  cardMedia: {
    display: 'flex',
  },
  tableCell: {
    borderBottom: 'none',
  },
}))

const sources = [
  {
    id: 1,
    type: 'Social',
    revenue: 275,
    value: 38,
  },
  {
    id: 2,
    type: 'Search',
    revenue: 100,
    value: -15,
  },
  {
    id: 3,
    type: 'Direct',
    revenue: 1200,
    value: 42,
  },
]

const browsers = [
  {
    id: 1,
    name: 'Chrome',
    users: '3500',
    percentage: 40,
  },
  {
    id: 2,
    name: 'Safari',
    users: '3250',
    percentage: 38,
  },
  {
    id: 3,
    name: 'Firefox',
    users: '1800',
    percentage: 21,
  },
]

const traffics = [
  {
    id: 1,
    source: 'Google',
    users: 1250,
    sessions: 1300,
    avg_session: '00:07:30',
    percentage: 20,
  },
  {
    id: 2,
    source: 'Direct',
    users: 750,
    sessions: 805,
    avg_session: '00:10:20',
    percentage: 12,
  },
  {
    id: 3,
    source: 'Duck Duck Go',
    users: 626,
    sessions: 732,
    avg_session: '00:09:14',
    percentage: 11,
  },
  {
    id: 4,
    source: 'Twitter',
    users: 653,
    sessions: 725,
    avg_session: '00:08:14',
    percentage: 10,
  },
  {
    id: 5,
    source: 'Facebook',
    users: 803,
    sessions: 971,
    avg_session: '00:06:12',
    percentage: 13,
  },
  {
    id: 6,
    source: 'Bing',
    users: 7,
    sessions: 13,
    avg_session: '00:02:30',
    percentage: 1,
  },
]

const headerCards = [
  {
    id: 1,
    title: 'Fixed Issues',
    content: '22',
    variant: 'h4',
    align: 'right',
    buttonText: 'View fixes',
    width: 3,
  },
  {
    id: 2,
    title: 'Revenue',
    content: '$1200',
    variant: 'h4',
    align: 'right',
    buttonText: 'View details',
    width: 3,
  },
  {
    id: 3,
    title: 'New Followers',
    content: '+15',
    variant: 'h4',
    align: 'right',
    buttonText: 'View Followers',
    width: 3,
  },
  {
    id: 4,
    title: 'Storage',
    content: '9/10 GB',
    variant: 'h4',
    align: 'right',
    buttonText: 'Get more storage',
    width: 3,
  },
]

const footerCards = [
  {
    id: 1,
    title: 'Something Wrong?',
    content: `Are you having any issues with the data that has been presented? Please do 
      not hesitate to contact our customer support team if you have any questions.`,
    buttonText: 'Contact Us',
    variant: 'body1',
    align: 'left',
    width: 6,
  },
  {
    id: 2,
    title: 'Want More Information?',
    content: `Can't find the data you are looking for? Would you like access to even more 
    metrics? Upgrade to Dashboard Pro to gain access to even more reports!`,
    variant: 'body1',
    align: 'left',
    buttonText: 'Get started',
    width: 6,
  },
]

const card = (metric: Metric) => {
  return (
    <Grid key={metric.id} item xs={12} sm={metric.width as GridSize}>
      <Card>
        <CardHeader title={metric.title} />
        <CardContent>
          {/*@ts-ignore*/}
          <Typography align={metric.align} variant={metric.variant}>
            {metric.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Button color='secondary'>{metric.buttonText}</Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default function Metrics() {
  const classes = useStyles()

  return (
    <Fragment>
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography component='h1' variant='h4' gutterBottom>
              Metrics
            </Typography>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          {headerCards.map((header) => {
            return card(header)
          })}
          <Grid item xs={12} md={9}>
            <Card>
              <CardMedia style={{ height: '400px' }}>
                <NewOldCustomers />
              </CardMedia>
            </Card>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card>
              <CardMedia style={{ height: '400px' }}>
                <Paper className={classes.paper} style={{ height: '190px' }}>
                  <NewVisitors />
                </Paper>
                <TableContainer>
                  <Table aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableCell}>
                          Source
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Revenue
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Value
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {sources.map((source) => (
                        <TableRow key={source.id}>
                          <TableCell className={classes.tableCell}>
                            {source.type}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            {source.revenue}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                            style={{
                              color: source.value > 0 ? '#07b324' : '#e63e32',
                            }}
                          >
                            {`${source.value > 0 ? '+' : ''}${source.value}%`}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardMedia>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl'>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardHeader title='Browsers' />
              <CardContent>
                <TableContainer>
                  <Table aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableCell}>
                          Browser
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Users
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          % of Users
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {browsers.map((browser) => (
                        <TableRow key={browser.id}>
                          <TableCell className={classes.tableCell}>
                            {browser.name}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            {browser.users}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            <LinearProgress
                              variant='determinate'
                              value={browser.percentage}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={8}>
            <Card aria-label='traffic table'>
              <CardHeader title='Traffic' />
              <CardContent>
                <TableContainer>
                  <Table aria-label='simple table'>
                    <TableHead>
                      <TableRow>
                        <TableCell className={classes.tableCell}>
                          Source
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Users
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Sessions
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          % of Users
                        </TableCell>
                        <TableCell className={classes.tableCell} align='right'>
                          Avg. Session
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {traffics.map((traffic) => (
                        <TableRow key={traffic.id}>
                          <TableCell className={classes.tableCell}>
                            {traffic.source}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            {traffic.users}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            {traffic.sessions}
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            <LinearProgress
                              variant='determinate'
                              value={traffic.percentage}
                            />
                          </TableCell>
                          <TableCell
                            className={classes.tableCell}
                            align='right'
                          >
                            {traffic.avg_session}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
            </Card>
          </Grid>
          {footerCards.map((footer) => {
            return card(footer)
          })}
        </Grid>
      </Container>
    </Fragment>
  )
}
