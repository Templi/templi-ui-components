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

/** Add Undo/Redo feature for the form of the table */
/** Add integer input field in "List 1" and apply all button */
export default function index() {
  const handleApplyImageToAll = () => {}
  const handleApplyFilter1 = () => {}
  const handleApplyFilter2 = () => {}
  const [rowCount, setRowCount] = useState(5)
  const [unitOfMeasure, setUnitOfMeasure] = useState('in')
  const [simpleSKUMassUpdate, setSimpleSKUMassUpdate] = useState('SKUTST056')
  const [cupSize, setCupSize] = useState<string[]>([])
  const [color, setColor] = useState<string[]>([])

  const handleSKUMassUpdate = () => {}

  const headers = [
    {
      // Display image as thumbnail
      label: 'Image',
      type: 'button',
      action: handleApplyImageToAll,
      id: 'images',
      icon: 'add_circle',
      color: 'blue'
    },
    {
      type: 'filter',
      value: cupSize,
      setValue: setCupSize,
      placeholder: 'Cup Size',
      action: handleApplyFilter1,
      id: 'attr1',
      icon: 'add_circle',
      renderCheckbox: true,
      menuOptions: [
        { value: 'val1', label: '8oz' },
        { value: 'val2', label: '12oz' },
        { value: 'val3', label: '16oz' }
      ]
    },
    {
      type: 'filter',
      value: color,
      setValue: setColor,
      placeholder: 'Color',
      action: handleApplyFilter2,
      id: 'attr2',
      icon: 'add_circle',
      renderCheckbox: true,
      menuOptions: [
        { value: 'val1', label: 'Black and White' },
        { value: 'val2', label: 'Full Color' }
      ]
    },
    {
      label: 'Simple SKU',
      type: 'disabledMassUpdateTextField',
      id: 'simpleSKU',
      value: simpleSKUMassUpdate,
      setValue: setSimpleSKUMassUpdate,
      onKeyDown: handleSKUMassUpdate
    },
    {
      label: 'Supplier SKU',
      type: 'massUpdateTextField',
      action: handleApplyImageToAll,
      id: 'images',
      color: 'green'
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
          selected={unitOfMeasure}
          setSelected={setUnitOfMeasure}
        />
        <StyledButton label='Add Break' color='blue' iconName='add_circle' />
        <StyledButton label='Add List' color='blue' iconName='add_circle' />
        <StyledButton label='Add Template' color='blue' iconName='add_circle' />
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
