import { Fragment } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Jumbotron from '../../src/components/ui/jumbotron'
import JestTutorial from '../../src/components/tutorials/jest'

export default function JestExample() {
  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Jest'
              summary={`Jest is a JavaScript testing framework designed to ensure correctness 
              of any JavaScript codebase. It allows you to write tests with an approachable, 
              familiar and feature-rich API that gives you results quickly.`}
            />
          </Grid>
        </Grid>
      </Container>
      <JestTutorial />
    </Fragment>
  )
}
