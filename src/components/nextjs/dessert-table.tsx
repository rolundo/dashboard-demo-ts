import { makeStyles } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Dessert } from '../../types'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
})

type Props = {
  data: Dessert[]
}

export default function DessertTable({ data }: Props) {
  const classes = useStyles()

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align='right'>Calories</TableCell>
            <TableCell align='right'>Fat&nbsp;(g)</TableCell>
            <TableCell align='right'>Carbs&nbsp;(g)</TableCell>
            <TableCell align='right'>Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((data: Dessert) => (
            <TableRow key={data.name}>
              <TableCell component='th' scope='row'>
                {data.name}
              </TableCell>
              <TableCell align='right'>{data.calories}</TableCell>
              <TableCell align='right'>{data.fat}</TableCell>
              <TableCell align='right'>{data.carbs}</TableCell>
              <TableCell align='right'>{data.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
