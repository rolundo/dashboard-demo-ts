import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import useFetch from '../../features/hooks/use-fetch'
import { Comment } from '../../types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type Props = {
  url: string
}

export default function CommentTable({ url }: Props) {
  const classes = useStyles()
  const [data] = useFetch(url)

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>Body</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {data.map((data: Comment) => (
            <TableRow key={data.id}>
              <TableCell component='th' scope='row'>
                {data.id}
              </TableCell>
              <TableCell align='right'>{data.name}</TableCell>
              <TableCell align='right'>{data.email}</TableCell>
              <TableCell align='right'>{data.body}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
