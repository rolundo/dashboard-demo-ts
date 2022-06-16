import { Fragment, useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Jumbotron from '../../src/components/ui/jumbotron'
import CommentTable from '../../src/components/react/comment-table'
import CustomHooksTutorial from '../../src/components/tutorials/custom-hooks'

const useStyles = makeStyles((theme) => ({}))

export default function CustomHooksExample() {
  const [value, setValue] = useState('')

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Custom Hooks'
              summary={`Custom hooks allow us to share stateful logic between components 
              without having to use render props or high-order components. In this example,
              we will be creating a fetch hook that will fetch a collection of records using
              the URL argument that is passed to it. This logic can then be reused by multiple components.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography variant='body2'>
              The following component will use the useFetch hook to fetch the
              first 5 comments:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CommentTable
              url={'https://jsonplaceholder.typicode.com/comments?_limit=5'}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant='body2'>
              The following component will use the same hook to fetch the first
              comment:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CommentTable
              url={'https://jsonplaceholder.typicode.com/comments?id=1'}
            />
          </Grid>
        </Grid>
      </Container>
      <CustomHooksTutorial />
    </Fragment>
  )
}
