import { TableCell, TableRow, colors } from '@mui/material'
import { StyledButton } from './StyledButton'
import { Dropdown } from './Dropdown'
import { useState } from 'react'
import StyledModal from './StyledModal'
import { TextInput } from './TextInput'

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
  value: any
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void
  renderCheckbox?: boolean
  setValue?: React.Dispatch<React.SetStateAction<any | any[]>>
  placeholder?: string
}

export type TableHeaderObjectProps = {
  headers: TableHeaderCellObject[]
}

export default function TableHeaderObject(props: TableHeaderObjectProps) {
  const { headers } = props
  const [selected, setSelected] = useState<string[]>([])

  return (
    <TableRow className='font-bold border-b-2 border-templi-bggray'>
      {headers?.map((header) => (
        <TableCell>
          {header.type === 'massUpdateTextField' && (
            <TextInput
              topLabel={header.label}
              placeholder={header.label}
              fullWidth
              value={header.value}
              onKeyDown={header?.onKeyDown}
              setValue={header?.setValue}
            />
          )}
          {header.type === 'button' && (
            <StyledButton
              label={header.label}
              onClick={header.action}
              iconName={header.icon}
              color={header.color}
              className='w-full min-w-full'
            ></StyledButton>
          )}
          {header.type === 'massUpdateButton' && (
            <>
              <StyledButton
                label={header.label}
                onClick={header.action}
                iconName={header.icon}
                color={header.color}
                className='w-full min-w-full'
              />
            </>
          )}
          {header.type === 'filter' && (
            <Dropdown
              placeholder={header.placeholder}
              options={header.menuOptions ?? []}
              fullWidth
              multiple
              selected={selected}
              setSelected={setSelected}
              renderCheckbox={header?.renderCheckbox}
            ></Dropdown>
          )}
        </TableCell>
      ))}
    </TableRow>
  )
}
