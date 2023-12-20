import { TableCell, TableRow, colors } from '@mui/material'
import { StyledButton } from './StyledButton'
import { Dropdown } from './Dropdown'
import { useState } from 'react'

export type TableHeaderCellObject = {
  label: string
  type: string
  action: () => void
  id: string
  icon?: string
  color?:
    | 'gold'
    | 'grey'
    | 'white'
    | 'blue'
    | 'green'
    | 'red'
    | 'purple'
    | 'blank'
    | string
  menuOptions?: any[]
}

export type TableHeaderObjectProps = {
  headers: TableHeaderCellObject[]
}

export default function TableHeaderObject(props: TableHeaderObjectProps) {
  const { headers } = props
  const [selected, setSelected] = useState<string[]>([])

  return (
    <TableRow className='font-bold'>
      {headers?.map((header) => (
        <TableCell>
          {header.type === 'button' && (
            <StyledButton
              label={header.label}
              onClick={header.action}
              iconName={header.icon}
              color={header.color}
              className='w-full min-w-full'
            ></StyledButton>
          )}
          {header.type === 'filter' && (
            <Dropdown
              label={header.label}
              options={header.menuOptions ?? []}
              fullWidth
              multiple
              selected={selected}
              setSelected={setSelected}
            ></Dropdown>
          )}
        </TableCell>
      ))}
    </TableRow>
  )
}
