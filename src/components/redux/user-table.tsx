import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { User } from '../../types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type Props = {
  data: User[]
}

export default function UserTable({ data }: Props) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align='left'>Name</TableCell>
            <TableCell align='left'>Email</TableCell>
            <TableCell align='left'>City</TableCell>
            <TableCell align='left'>Zipcode</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data: User) => (
            <TableRow key={data.id}>
              <TableCell component='th' scope='row'>
                {data.id}
              </TableCell>
              <TableCell align='left'>{data.name}</TableCell>
              <TableCell align='left'>{data.email}</TableCell>
              <TableCell align='left'>{data.address.city}</TableCell>
              <TableCell align='left'>{data.address.zipcode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
