import { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Jumbotron from '../../src/components/ui/jumbotron'
import SortableCreateable from '../../src/components/layout/sortable-createable'
import { alphabetize } from '../api/alphabetize'
import AlienAlphabetTutorial from '../../src/components/tutorials/alien-alphabet'
import { Option } from '../../src/types'

function App() {
  const [words, setWords] = useState<Option[]>([])
  const [order, setOrder] = useState<string[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    // reset order and error when the words array is updated
    setOrder([])
    setError(undefined)
  }, [words])

  const isSortable = () => {
    try {
      setOrder(alphabetize(words.map((w) => w.value)))
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error)
        setError(error)
      }
    }
  }

  return (
    <Fragment>
      <Container maxWidth='md' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center' spacing={3}>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <Jumbotron
              title='Alien Alphabet'
              summary={`In this example, we will attempt to determine the order of an 
                alien alphabet based on a given list of words.
              `}
            />
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' component='main'>
        {/*@ts-ignore*/}
        <Grid container align='center' spacing={3}>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <SortableCreateable
              selected={words}
              setSelected={(e: Option[]) => setWords(e)}
            />
          </Grid>
          {/*@ts-ignore*/}
          <Grid item xs={12} align='center'>
            <button disabled={words.length < 1} onClick={isSortable}>
              Alphabetize
            </button>
          </Grid>
          {!error && order.length === 0 && (
            <Grid item xs={12}>
              <Typography>&nbsp;</Typography>
            </Grid>
          )}
          {!error && order.length > 0 && (
            <Grid item xs={12}>
              <Typography>{order.join(',')}</Typography>
            </Grid>
          )}
          {error && (
            <Grid item xs={12}>
              <Typography>{error.message}</Typography>
            </Grid>
          )}
        </Grid>
      </Container>
      <AlienAlphabetTutorial />
    </Fragment>
  )
}

export default App
