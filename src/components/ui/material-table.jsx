import { forwardRef } from 'react'
import MaterialTable from 'material-table'
// import { useTheme } from '@material-ui/core'

import AddBox from '@material-ui/icons/AddBox'
import ArrowDownward from '@material-ui/icons/ArrowDownward'
import Check from '@material-ui/icons/Check'
import ChevronLeft from '@material-ui/icons/ChevronLeft'
import ChevronRight from '@material-ui/icons/ChevronRight'
import Clear from '@material-ui/icons/Clear'
import DeleteOutline from '@material-ui/icons/DeleteOutline'
import Edit from '@material-ui/icons/Edit'
import FilterList from '@material-ui/icons/FilterList'
import FirstPage from '@material-ui/icons/FirstPage'
import LastPage from '@material-ui/icons/LastPage'
import Remove from '@material-ui/icons/Remove'
import SaveAlt from '@material-ui/icons/SaveAlt'
import Search from '@material-ui/icons/Search'
import ViewColumn from '@material-ui/icons/ViewColumn'

const addBox = (props, ref) => <AddBox {...props} ref={ref} />
const check = (props, ref) => <Check {...props} ref={ref} />
const clear = (props, ref) => <Clear {...props} ref={ref} />
const deleteRef = (props, ref) => <DeleteOutline {...props} ref={ref} />
const detailPanel = (props, ref) => <ChevronRight {...props} ref={ref} />
const edit = (props, ref) => <Edit {...props} ref={ref} />
const exportRef = (props, ref) => <SaveAlt {...props} ref={ref} />
const filterRef = (props, ref) => <FilterList {...props} ref={ref} />
const firstPage = (props, ref) => <FirstPage {...props} ref={ref} />
const lastPage = (props, ref) => <LastPage {...props} ref={ref} />
const nextPage = (props, ref) => <ChevronRight {...props} ref={ref} />
const previousPage = (props, ref) => <ChevronLeft {...props} ref={ref} />
const resetSearch = (props, ref) => <Clear {...props} ref={ref} />
const search = (props, ref) => <Search {...props} ref={ref} />
const sortArrow = (props, ref) => <ArrowDownward {...props} ref={ref} />
const thirdStateCheck = (props, ref) => <Remove {...props} ref={ref} />
const viewColumn = (props, ref) => <ViewColumn {...props} ref={ref} />

const tableIcons = {
  Add: forwardRef(addBox),
  Check: forwardRef(check),
  Clear: forwardRef(clear),
  Delete: forwardRef(deleteRef),
  DetailPanel: forwardRef(detailPanel),
  Edit: forwardRef(edit),
  Export: forwardRef(exportRef),
  Filter: forwardRef(filterRef),
  FirstPage: forwardRef(firstPage),
  LastPage: forwardRef(lastPage),
  NextPage: forwardRef(nextPage),
  PreviousPage: forwardRef(previousPage),
  ResetSearch: forwardRef(resetSearch),
  Search: forwardRef(search),
  SortArrow: forwardRef(sortArrow),
  ThirdStateCheck: forwardRef(thirdStateCheck),
  ViewColumn: forwardRef(viewColumn),
}

export default function Table(props) {
  // const theme = useTheme()

  return (
    <MaterialTable
      options={{
        showTitle: false,
        // headerStyle: { backgroundColor: '#424242' },
      }}
      icons={tableIcons}
      data={props.data}
      columns={props.columns}
      editable={{
        onRowAdd: (newData) => {
          props.setData([...props.data, newData])
        },
        onRowUpdate: async (newData, oldData) => {
          try {
            const dataUpdate = [...props.data]
            const index = oldData.tableData.id
            dataUpdate[index] = newData
            props.setData([...dataUpdate])
          } catch (error) {
            console.log(`Unable to update row: ${error}`)
          }
        },
        onRowDelete: (oldData) => {
          const dataDelete = [...props.data]
          const index = oldData.tableData.id
          dataDelete.splice(index, 1)
          props.setData([...dataDelete])
        },
      }}
    />
  )
}
