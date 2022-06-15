import { Fragment } from 'react'
import { language } from '../../src/features/languageSlice'
import { useAppSelector } from '../../src/app/hooks'
import Container from '@material-ui/core/Container'
import { Grid, Typography } from '@material-ui/core'
import Jumbotron from '../../src/components/ui/jumbotron'
import ReduxSetupTutorial from '../../src/components/tutorials/redux-setup'

export default function AsyncThunkExample() {
  const selectedLanguage = useAppSelector(language)

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Redux Store and Reducer'
              summary={`In this example, we will demonstrate how to set up a redux store to hold a reducer
              which will be used to manage a global state property called language. This language property can be 
              updated using the menu item in the header above.`}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        {/* @ts-ignore */}
        <Grid container align='center'>
          {/* @ts-ignore */}
          <Grid item xs={12} align='center'>
            <Typography paragraph variant='body2'>
              {`The currently selected language is ${selectedLanguage}.`}
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <ReduxSetupTutorial />
    </Fragment>
  )
}
