import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Highlighter from '../ui/highlighter'
import { Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(5),
  },
}))

export default function MemoTutorial() {
  const classes = useStyles()

  return (
    <Container maxWidth='xl' component='main' className={classes.container}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography variant='h5'>Tutorial</Typography>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <Typography paragraph>
            {`To create a memoized component, we need to use React's memo function
            and pass a component as the argument. In this example, we will be
            using useRef to keep count of how many times this component renders:`}
          </Typography>
          <Highlighter
            codeString={`
              import { memo, useRef } from 'react'

              function Memoized() {
                const renderCount = useRef(0)
                return (
                  <div>
                    <p>
                      {\`This component's props do not change, so I have rendered: \${renderCount.current++} times\`}
                    </p>
                  </div>
                )
              }
              
              export default memo(Memoized)
            `}
          />
          <Typography paragraph>
            {`Then we include this element in the parent component. Since the
            props of the memoized component never change, the component should
            not re-render when the parent component's state changes:`}
          </Typography>
          <Highlighter
            codeString={`
              <Grid container>
                <Grid item xs={12}>
                  <Typography paragraph variant='body2'>
                    The following component will not re-render even though the state
                    of the component changes when the textfield is changed.
                  </Typography>
                  <Memoized />
                </Grid>
              </Grid>
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
