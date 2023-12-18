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
import { useEffect, useState } from 'react'
import TableColumnFilterHeader from './TableColumnFilterHeader'
import TableFilterHeader from './TableFilterHeader'

function createData(
  checked: boolean,
  supplierName: string,
  phone: string,
  itemName: string,
  customerSince: string,
  openBalance: number,
  tags: any[],
  accounting: any,
  paymentTerms: string
) {
  return {
    checked,
    supplierName,
    phone,
    itemName,
    customerSince,
    openBalance,
    tags,
    accounting,
    paymentTerms
  }
}

const localData = [
  createData(
    true,
    'Flamingo Paper',
    '875-498-0034',
    'Jerry',
    '01/01/2022',
    0.0,
    [{ text: 'Urgent', textColor: 'white', bgColor: 'red' }],
    { text: 'Good', color: 'green' },
    'Credit Card'
  ),
  createData(
    true,
    'Cup Store, The',
    '201-387-6000',
    'John',
    '01/01/2022',
    8565.34,
    [
      { text: 'New', textColor: 'black', bgColor: 'teal' },
      { text: 'Priority', textColor: 'black', bgColor: 'orange' }
    ],
    { text: 'Warning', color: 'gold' },
    'Credit Card'
  ),
  createData(
    true,
    'Greenpack USA',
    '875-498-0034',
    'Jerry',
    '01/01/2022',
    0.0,
    [{ text: 'Urgent', textColor: 'white', bgColor: 'red' }],
    { text: 'Good', color: 'green' },
    'Credit Card'
  ),
  createData(
    true,
    'Cup Store, The',
    '201-387-6000',
    'John',
    '01/01/2022',
    8565.34,
    [
      { text: 'New', textColor: 'black', bgColor: 'teal' },
      { text: 'Priority', textColor: 'black', bgColor: 'orange' }
    ],
    { text: 'Warning', color: 'gold' },
    'Credit Card'
  ),
  createData(
    true,
    'Cup Store, The',
    '201-387-6000',
    'John',
    '01/01/2022',
    8565.34,
    [
      { text: 'New', textColor: 'black', bgColor: 'teal' },
      { text: 'Priority', textColor: 'black', bgColor: 'orange' }
    ],
    { text: 'Warning', color: 'gold' },
    'Credit Card'
  ),
  createData(
    true,
    'Cup Store, The',
    '201-387-6000',
    'John',
    '01/01/2022',
    8565.34,
    [
      { text: 'New', textColor: 'black', bgColor: 'teal' },
      { text: 'Priority', textColor: 'black', bgColor: 'orange' }
    ],
    { text: 'Warning', color: 'gold' },
    'Credit Card'
  )
]

const localHeaders: TableHeader[] = [
  { name: 'Actions', isFilterable: false, display: true },
  { name: 'Supplier Name', isFilterable: false, display: true },
  { name: 'Phone', isFilterable: false, display: true },
  { name: 'Contact', isFilterable: false, display: true },
  { name: 'Customer Since', isFilterable: false, display: true },
  { name: 'Open Balance', isFilterable: false, display: true },
  { name: 'Tags', isFilterable: false, display: true },
  { name: 'Accounting', isFilterable: false, display: true },
  { name: 'Payment Terms', isFilterable: false, display: true }
]

export type TableHeader = {
  name: string
  isFilterable?: boolean
  display?: boolean
}

export type TableData = any

type StyledTableProps = {
  headers: TableHeader[]
  data?: TableData[]
}

export default function StyledTable(props: StyledTableProps) {
  const { headers, data } = props
  const [filteredHeaders, setFilteredHeaders] = useState(headers)

  const [filteredData, setFilteredData] = useState(data ?? localData)
  const [paginatedData, setPaginatedData] = useState(data ?? localData)

  const [currentPage, setCurrentPage] = useState(0)
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number
  ) => {
    setPaginatedData([])
    setCurrentPage(page)
  }

  const [rowsPerPage, setRowsPerPage] = useState(5)

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPaginatedData([])
    setRowsPerPage(parseInt(event.target.value, 10))
  }

  const defaultLabelDisplayedRows = ({ to, count, page }) => {
    const numberOfPages = Math.ceil(count / rowsPerPage)
    return `Page ${page + 1} of ${numberOfPages > 0 ? numberOfPages : 1}
    `
  }

  useEffect(() => {
    const localPaginatedData =
      rowsPerPage > 0
        ? filteredData.slice(
            currentPage * rowsPerPage,
            currentPage * rowsPerPage + rowsPerPage
          )
        : filteredData
    setPaginatedData(localPaginatedData)
  }, [currentPage, rowsPerPage])

  return (
    <div>
      <TableFilterHeader />

      <TableColumnFilterHeader
        headers={filteredHeaders}
        setHeaders={setFilteredHeaders}
        data={filteredData}
        setData={setFilteredData}
        id='suppliersTbl'
        defaultHeaders={headers}
      />

      <TableContainer component={Paper} className='w-full'>
        <Table sx={{ minWidth: 650, width: '100%' }} aria-label='simple table'>
          <TableHead className='font-bold bg-templi-lightgray'>
            <TableRow className='font-bold'>
              {filteredHeaders?.map(
                (header) =>
                  header.display && (
                    <TableCell className='font-bold'>{header.name}</TableCell>
                  )
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData?.map((row) => (
              <TableRow
                key={row.itemName}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component='th' scope='row'>
                  <StyledCheckbox checked={row.checked}></StyledCheckbox>
                </TableCell>
                <TableCell>{row.supplierName}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>{row.itemName}</TableCell>
                <TableCell>{row.customerSince}</TableCell>
                <TableCell component='th' scope='row'>
                  {`$${row.openBalance.toLocaleString('en-US', {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                  })}`}
                </TableCell>
                <TableCell>
                  {row?.tags.map((tag) => (
                    <TextTag
                      text={(tag as any)?.text}
                      textColor={(tag as any)?.textColor}
                      bgColor={(tag as any)?.bgColor}
                      className='mb-[4px]'
                    />
                  ))}
                </TableCell>
                <TableCell>
                  <TextLabel
                    text={row?.accounting?.text}
                    color={row?.accounting?.color}
                  />
                </TableCell>
                <TableCell>{row.paymentTerms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TableFooter className='w-full flex items-center justify-end'>
        <TablePagination
          rowsPerPageOptions={[1, 5, 10]}
          component='div'
          count={filteredData.length}
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
