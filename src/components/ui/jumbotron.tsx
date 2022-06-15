import { Fragment } from 'react'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  title: {
    marginBottom: theme.spacing(1),
  },
  paragraph: {
    marginBottom: theme.spacing(3),
  },
}))

type Props = {
  title: string
  summary: string
}

export default function Jumbotron({ title, summary }: Props) {
  const classes = useStyles()

  return (
    <Fragment>
      <Typography
        className={classes.title}
        align='center'
        variant='h2'
        component='h1'
      >
        {title}
      </Typography>
      <Typography className={classes.paragraph} align='center' paragraph>
        {summary}
      </Typography>
    </Fragment>
  )
}
