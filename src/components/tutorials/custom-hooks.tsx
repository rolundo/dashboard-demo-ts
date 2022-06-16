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

export default function CustomHooksTutorial() {
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
            {`We begin by creating a hook that contains logic that can be reused my 
            multiple components. A hook's name should always being with 'use' so that 
            you know the rules of hooks applies to it. This hook will simply make a
            fetch request using the provided URL and return a collection of comments:`}
          </Typography>
          <Highlighter
            codeString={`
              import { useEffect, useState } from 'react'
              import axios from 'axios'
              import { Comment } from '../../types'
              
              export default function useFetch(url: string) {
                const [data, setData] = useState<Comment[]>([])
              
                useEffect(() => {
                  axios.get(url).then((response) => setData(response.data))
                }, [url])
              
                return [data]
              }
            `}
          />
          <Typography paragraph>
            Now we can use this custom hook from within our other components:
          </Typography>
          <Highlighter
            codeString={`
              export default function CommentTable({ url }: Props) {
                const classes = useStyles()
                const [data] = useFetch(url)
              }
            `}
          />
        </Grid>
      </Grid>
    </Container>
  )
}
