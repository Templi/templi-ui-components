import { Dropdown } from '@/components/Dropdown'
import { StyledButton } from '@/components/StyledButton'
import TableHeaderObject from '@/components/TableHeaderObject'
import { TextInput } from '@/components/TextInput'
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material'
import { useState } from 'react'

export default function index() {
  const handleApplyImageToAll = () => {}
  const handleApplyFilter1 = () => {}
  const [rowCount, setRowCount] = useState(5)
  const headers = [
    {
      label: 'Image',
      type: 'button',
      action: handleApplyImageToAll,
      id: 'images',
      icon: 'add_circle',
      color: 'blue'
    },
    {
      label: 'Attribute 1',
      type: 'filter',
      action: handleApplyFilter1,
      id: 'attr1',
      icon: 'add_circle',
      color: 'blue',
      menuOptions: [
        { value: 'val1', label: 'Value 1', checked: true },
        { value: 'val2', label: 'Value 2', checked: false }
      ]
    },
    {
      label: 'Attribute 3',
      type: 'filter',
      action: handleApplyFilter1,
      id: 'attr1',
      icon: 'add_circle',
      color: 'blue',
      menuOptions: [
        { value: 'val1', label: 'Value 1', checked: true },
        { value: 'val2', label: 'Value 2', checked: false }
      ]
    },
    {
      label: 'Attribute 4',
      type: 'filter',
      action: handleApplyFilter1,
      id: 'attr1',
      icon: 'add_circle',
      color: 'blue',
      menuOptions: [
        { value: 'val1', label: 'Value 1', checked: true },
        { value: 'val2', label: 'Value 2', checked: false }
      ]
    },
    {
      label: 'Attribute 5',
      type: 'filter',
      action: handleApplyFilter1,
      id: 'attr1',
      icon: 'add_circle',
      color: 'blue',
      menuOptions: [
        { value: 'val1', label: 'Value 1', checked: true },
        { value: 'val2', label: 'Value 2', checked: false }
      ]
    }
  ]

  const tableRows: any[] = []

  for (let idx = 0; idx < rowCount; idx++) {
    tableRows.push(
      <TableRow className='border-0'>
        {headers.map((header) => (
          <TableCell className='border-0' id={`${header.label}-idx`}>
            <TextInput className='w-full min-w-full' />
          </TableCell>
        ))}
      </TableRow>
    )
  }

  return (
    <div className='p-[20px]'>
      <div className='flex items-center justify-start gap-[40px] mb-[120px]'>
        <Dropdown
          label='Unit of Measure'
          options={[
            { value: 'in', label: 'Inches' },
            { value: 'cm', label: 'Centimeters' }
          ]}
        />
        <StyledButton label='Add Break' color='blue' iconName='add_circle' />
        <StyledButton label='Add List' color='blue' iconName='add_circle' />
      </div>
      <TableContainer component={Paper} className='w-full'>
        <Table sx={{ minWidth: 650, width: '100%' }} aria-label='simple table'>
          <TableHeaderObject headers={headers} />
          <TableBody className='border-0'>{tableRows}</TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
