import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { Checkbox, TableFooter, TablePagination } from '@mui/material'
import { StyledCheckbox } from './StyledCheckbox'
import TextLabel from './TextLabel'
import TextTag from './TextTag'
import { useState } from 'react'

function createData(
  checked: boolean,
  orderDate: string,
  orderNumber: string,
  itemName: string,
  supplier: string,
  status: string,
  shipDate: string,
  total: number,
  reorder: boolean,
  tags: any[]
) {
  return {
    checked,
    orderDate,
    orderNumber,
    itemName,
    supplier,
    status,
    shipDate,
    total,
    reorder,
    tags
  }
}

const rows = [
  createData(
    true,
    '10/24/2023',
    '000000567',
    '12oz Cold Cups',
    'Flamingo Paper',
    'Processing',
    '11/14/2023',
    104.59,
    true,
    [
      { text: 'Rush Order', textColor: 'black', bgColor: '#C6F1DC' },
      { text: 'Shipping TBD', textColor: 'black', bgColor: '#E7796D' }
    ]
  ),
  createData(
    true,
    '01/01/2022',
    '000000603',
    '12oz Cold Cups',
    'Flamingo Paper',
    'Processing',
    '01/15/2022',
    73.01,
    false,
    [{ text: 'ON HOLD', textColor: 'white', bgColor: 'red' }]
  )
]

const headers = [
  'Actions',
  'Order Date',
  'Order#',
  'Item Name',
  'Supplier',
  'Status',
  'Ship Date',
  'Total',
  'Tags',
  'Reorder'
]

export default function BasicTable() {
  const [currentPage, setCurrentPage] = useState(0)
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setCurrentPage(page)
  }

  const [rowsPerPage, setRowsPerPage] = useState(2)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setCurrentPage(0)
  }

  const defaultLabelDisplayedRows = ({ from, to, count, page }) => {
    return `Page ${page + 1} of ${count !== -1 ? count : `more than ${to}`}`
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead className='font-bold bg-templi-lightgray'>
            <TableRow className='font-bold'>
              {headers.map((header) => (
                <TableCell className='font-bold'>{header}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.itemName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <StyledCheckbox checked={row.checked}></StyledCheckbox>
                </TableCell>
                <TableCell>{row.orderDate}</TableCell>
                <TableCell>{row.orderNumber}</TableCell>
                <TableCell>{row.itemName}</TableCell>
                <TableCell>{row.supplier}</TableCell>
                <TableCell component='th' scope='row'>
                  {row.status}
                </TableCell>
                <TableCell>{row.shipDate}</TableCell>
                <TableCell>{row.total}</TableCell>
                <TableCell>
                  <div className='flex flex-col w-full items-start justify-center gap-[4px]'>
                    {row.tags?.map((tag) => (
                      <TextTag text={tag.text} bgColor={tag.bgColor} />
                    ))}
                  </div>
                </TableCell>
                <TableCell>
                  {row.reorder && (
                    <TextLabel
                      text='Replenish'
                      color='gold'
                      onClick={() => alert('clicked!')}
                    />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter className='w-full flex items-center justify-end'>
        <TablePagination
          rowsPerPageOptions={[1, 2, 10]}
          component='div'
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          labelRowsPerPage='Rows'
          labelDisplayedRows={defaultLabelDisplayedRows}
        />
      </TableFooter>
    </div>
  )
}
