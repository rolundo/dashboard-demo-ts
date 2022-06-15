import React from 'react'
import { Container, Grid, makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginBottom: theme.spacing(2),
  },
  updatePicture: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: theme.spacing(1),
  },
  saveChanges: {
    marginBottom: theme.spacing(1),
  },
}))

const fields = [
  { id: 'username', label: 'Username', defaultValue: 'rolundo' },
  { id: 'email', label: 'Email', defaultValue: 'rolando@io' },
  { id: 'first name', label: 'First Name', defaultValue: 'Rolando' },
  { id: 'last name', label: 'Last Name', defaultValue: 'Rodriguez' },
  { id: 'city', label: 'City', defaultValue: 'College Station' },
  { id: 'state', label: 'State', defaultValue: 'Texas' },
]

export default function Account() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container>
        <Grid item xs={12}>
          <Typography component='h1' variant='h4'>
            Account
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} className={classes.container}>
        <Grid item xs={12} sm={4}>
          <Card>
            {/*@ts-ignore*/}
            <CardContent align='center'>
              <Avatar className={classes.large}></Avatar>
              <Typography>Rolando Rodriguez</Typography>
              <Typography>Current Plan: Free</Typography>
            </CardContent>
            <CardActions className={classes.updatePicture}>
              <Button variant='contained' color='secondary'>
                Update Picture
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardContent>
              <form>
                <Grid container spacing={2} alignItems='flex-end'>
                  {fields.map((field) => (
                    <Grid key={field.id} item xs={12} sm={8} md={6}>
                      <TextField
                        margin='normal'
                        required
                        fullWidth
                        id={field.id}
                        label={field.label}
                        defaultValue={field.defaultValue}
                      />
                    </Grid>
                  ))}
                </Grid>
              </form>
            </CardContent>
            <CardActions className={classes.saveChanges}>
              <Button variant='contained' color='secondary'>
                Save Changes
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  )
}
