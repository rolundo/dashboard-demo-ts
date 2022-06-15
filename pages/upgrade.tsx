import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import { Fragment } from 'react'
import Jumbotron from '../src/components/ui/jumbotron'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
  },
}))

export default function Upgrade() {
  const classes = useStyles()

  const tiers = [
    {
      title: 'Free',
      price: '$0',
      features: ['250 emails per month', '5 GB of storage', 'Phone Support'],
      action: 'Current Tier',
      disabled: true,
    },
    {
      title: 'Pro',
      price: '$20',
      features: [
        '750 emails per month',
        '20 GB of storage',
        'Phone & Email Support',
      ],
      action: 'Get Started',
    },
    {
      title: 'Enterprise',
      price: '$30',
      features: [
        'Unlimited email',
        '30 GB of storage',
        '24/7 Phone & Email Support',
      ],
      action: 'Get Started',
    },
  ]

  return (
    <Fragment>
      <Container maxWidth='sm' component='main'>
        {/*@ts-ignore */}
        <Grid container align='center'>
          {/*@ts-ignore */}
          <Grid item align='center'>
            <Jumbotron
              title='Dashboard Upgrade'
              summary={`
              Ugrade to the Enterprise version to receive access to 30 GB of
              storage and our 24/7 Phone & Email Support`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='md' component='main'>
        <Grid container spacing={5} alignItems='flex-end'>
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardHeader
                  className={classes.cardHeader}
                  title={tier.title}
                  align='center'
                />
                <CardContent>
                  <Typography align='center' variant='h4' gutterBottom>
                    {tier.price}/mo
                  </Typography>
                  {tier.features.map((feature) => (
                    <Typography key={feature} align='center'>
                      {feature}
                    </Typography>
                  ))}
                </CardContent>
                <CardActions>
                  <Button
                    variant='contained'
                    color='secondary'
                    fullWidth
                    disabled={tier.disabled}
                  >
                    {tier.action}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Fragment>
  )
}
