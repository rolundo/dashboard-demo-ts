import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import { Fragment } from 'react'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  card: {
    height: '100%',
  },
  cardHeader: {
    backgroundColor: theme.palette.primary.light,
  },
  container: {
    marginBottom: theme.spacing(3),
  },
  containerImage: {
    backgroundImage: 'url(https://source.unsplash.com/photos/X79v5N3O4yA)',
    marginBottom: theme.spacing(3),
    color: '#fff',
  },
  jumbotron: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginBottom: theme.spacing(2),
    color: 'white',
  },
  postContent: {
    whiteSpace: 'pre-line',
  },
}))

const featuredPosts = [
  {
    id: 1,
    title: 'Featured Post 1',
    date: '2021-06-01',
    content: `Sed vitae enim vitae mi sagittis suscipit quis nec turpis. Integer nec pretium
      turpis, fringilla pretium est.`,
  },
  {
    id: 2,
    date: '2021-05-26',
    title: 'Featured Post 2',
    content: `Sed vitae enim vitae mi sagittis suscipit quis nec turpis. Integer nec pretium
      turpis, fringilla pretium est.`,
  },
  {
    id: 3,
    date: '2021-05-15',
    title: 'Featured Post 3',
    content: `Sed vitae enim vitae mi sagittis suscipit quis nec turpis. Integer nec pretium
      turpis, fringilla pretium est.`,
  },
]

const posts = [
  {
    id: 1,
    date: '2021-06-24',
    title: 'Title of Post 1',
    content: `Praesent sed eleifend lacus. Morbi suscipit luctus metus facilisis pharetra. Pellentesque tempor, nisl at iaculis finibus, turpis libero tincidunt mauris, quis maximus arcu lorem sit amet eros. Quisque ac fermentum sem, sit amet tristique tellus. Aenean mattis fermentum lectus vitae viverra. Aliquam dapibus mi vel urna consectetur, varius lobortis leo interdum. In nec placerat felis. Donec sed posuere urna. Proin efficitur tincidunt lorem, sit amet tincidunt enim tincidunt eget. Integer commodo justo ut magna auctor faucibus. In consectetur semper dolor, a imperdiet purus tincidunt sed. Nulla lacus tellus, scelerisque et odio a, efficitur aliquam metus. Nulla hendrerit volutpat dolor, ut porta ex congue sit amet. Integer lorem ligula, facilisis sed ex quis, gravida finibus nisi. Nam tincidunt diam et quam vulputate, sit amet pulvinar sapien sagittis. Nulla lobortis a eros in ornare.\n
      Nunc congue est ut convallis varius. Nam suscipit ligula libero, vel luctus leo porttitor ac. Nam ut sapien ante. Sed quis risus ullamcorper, varius urna ac, tempor sem. Sed non mattis leo, consectetur lacinia quam. Phasellus quis varius dui, ac dignissim diam. Aenean auctor iaculis sollicitudin. Donec ac mauris lobortis, vehicula dolor a, congue metus. Mauris lacinia lectus sit amet metus consectetur aliquam. Aliquam vel dictum lectus. Nullam eget tellus sit amet purus pharetra aliquam.`,
  },
  {
    id: 2,
    date: '2021-06-23',
    title: 'Title of Post 1',
    content: `Praesent sed eleifend lacus. Morbi suscipit luctus metus facilisis pharetra. Pellentesque tempor, nisl at iaculis finibus, turpis libero tincidunt mauris, quis maximus arcu lorem sit amet eros. Quisque ac fermentum sem, sit amet tristique tellus. Aenean mattis fermentum lectus vitae viverra. Aliquam dapibus mi vel urna consectetur, varius lobortis leo interdum. In nec placerat felis. Donec sed posuere urna. Proin efficitur tincidunt lorem, sit amet tincidunt enim tincidunt eget. Integer commodo justo ut magna auctor faucibus. In consectetur semper dolor, a imperdiet purus tincidunt sed. Nulla lacus tellus, scelerisque et odio a, efficitur aliquam metus. Nulla hendrerit volutpat dolor, ut porta ex congue sit amet. Integer lorem ligula, facilisis sed ex quis, gravida finibus nisi. Nam tincidunt diam et quam vulputate, sit amet pulvinar sapien sagittis. Nulla lobortis a eros in ornare.\n
      Nunc congue est ut convallis varius. Nam suscipit ligula libero, vel luctus leo porttitor ac. Nam ut sapien ante. Sed quis risus ullamcorper, varius urna ac, tempor sem. Sed non mattis leo, consectetur lacinia quam. Phasellus quis varius dui, ac dignissim diam. Aenean auctor iaculis sollicitudin. Donec ac mauris lobortis, vehicula dolor a, congue metus. Mauris lacinia lectus sit amet metus consectetur aliquam. Aliquam vel dictum lectus. Nullam eget tellus sit amet purus pharetra aliquam.`,
  },
  {
    id: 3,
    date: '2021-06-21',
    title: 'Title of Post 3',
    content: `Praesent sed eleifend lacus. Morbi suscipit luctus metus facilisis pharetra. Pellentesque tempor, nisl at iaculis finibus, turpis libero tincidunt mauris, quis maximus arcu lorem sit amet eros. Quisque ac fermentum sem, sit amet tristique tellus. Aenean mattis fermentum lectus vitae viverra. Aliquam dapibus mi vel urna consectetur, varius lobortis leo interdum. In nec placerat felis. Donec sed posuere urna. Proin efficitur tincidunt lorem, sit amet tincidunt enim tincidunt eget. Integer commodo justo ut magna auctor faucibus. In consectetur semper dolor, a imperdiet purus tincidunt sed. Nulla lacus tellus, scelerisque et odio a, efficitur aliquam metus. Nulla hendrerit volutpat dolor, ut porta ex congue sit amet. Integer lorem ligula, facilisis sed ex quis, gravida finibus nisi. Nam tincidunt diam et quam vulputate, sit amet pulvinar sapien sagittis. Nulla lobortis a eros in ornare.\n
      Nunc congue est ut convallis varius. Nam suscipit ligula libero, vel luctus leo porttitor ac. Nam ut sapien ante. Sed quis risus ullamcorper, varius urna ac, tempor sem. Sed non mattis leo, consectetur lacinia quam. Phasellus quis varius dui, ac dignissim diam. Aenean auctor iaculis sollicitudin. Donec ac mauris lobortis, vehicula dolor a, congue metus. Mauris lacinia lectus sit amet metus consectetur aliquam. Aliquam vel dictum lectus. Nullam eget tellus sit amet purus pharetra aliquam.`,
  },
]

const months = [
  'June 2021',
  'May 2021',
  'April 2021',
  'March 2021',
  'February 2021',
  'January 2021',
  'December 2020',
  'November 2020',
  'October 2020',
]

export default function News() {
  const classes = useStyles()

  return (
    <Fragment>
      <Container
        maxWidth='xl'
        component='main'
        className={classes.containerImage}
      >
        <Grid container className={classes.jumbotron}>
          <Grid item>
            <Typography variant='h2' component='h1'>
              Title of Latest Post
            </Typography>
            <Typography paragraph>
              Sed at nisl nec turpis blandit efficitur. Vivamus sodales lobortis
              urna vitae ultricies. Donec et rhoncus mauris, a dictum arcu.
              Aenean feugiat neque eu arcu ultrices convallis eget eu libero.
              Sed vitae enim vitae mi sagittis suscipit quis nec turpis. Integer
              nec pretium turpis, fringilla pretium est. Duis sollicitudin
              lacinia erat in pretium. Donec interdum egestas egestas.
            </Typography>
            <Button className={classes.button}>Continue Reading...</Button>
          </Grid>
        </Grid>
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={3} alignItems='flex-end'>
          {featuredPosts.map((post) => (
            <Grid key={post.id} item xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent>
                  <Typography>{post.title}</Typography>
                  <Typography paragraph>{post.content}</Typography>
                </CardContent>
                <CardActions>
                  <Button variant='contained' color='secondary'>
                    Continue Reading...
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      <Container maxWidth='xl' className={classes.container}>
        <Grid container spacing={3} component='main'>
          <Grid item xs={12} sm={8}>
            <Typography variant='h5'>Latest Posts</Typography>
            <Divider />
            {posts.map((post) => (
              <div key={post.id}>
                <Typography variant='h6'>{post.title}</Typography>
                <Typography>{post.date}</Typography>
                <Typography className={classes.postContent} paragraph>
                  {post.content}
                </Typography>
              </div>
            ))}
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant='h5'>Archives</Typography>
            <Divider />
            <List>
              {months.map((month) => (
                <ListItem key={month}>
                  <a href='#'>{month}</a>
                </ListItem>
              ))}
            </List>
          </Grid>
        </Grid>
      </Container>
    </Fragment>
  )
}
