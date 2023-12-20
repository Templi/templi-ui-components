import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { StyledCheckbox } from './StyledCheckbox'
import { ListItemText } from '@mui/material'

type DropdownProps = {
  label?: string
  options: any[]
  selected?: any | any[]
  setSelected?: React.Dispatch<React.SetStateAction<any | any[]>>
  disabled?: boolean
  className?: string
  fullWidth?: boolean
  multiple?: boolean
}
export function Dropdown(props: DropdownProps) {
  const {
    options,
    label,
    setSelected,
    selected,
    disabled,
    className,
    fullWidth,
    multiple
  } = props

  const handleChange = (event: SelectChangeEvent) => {
    if (setSelected) {
      setSelected(event.target.value)
    }
  }
  return (
    <FormControl size='small' className={`${fullWidth ? 'w-full' : ''}`}>
      <InputLabel className='m-0 p-0 text-[14px]'>{label}</InputLabel>
      <Select
        value={selected ?? []}
        label={label}
        onChange={handleChange}
        size='small'
        className={`min-w-[160px] ${
          fullWidth ? 'w-full' : 'w-[160px]'
        } ${className}`}
        sx={{
          padding: 0,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'black'
          }
        }}
        disabled={disabled}
        SelectDisplayProps={{
          style: { paddingTop: 0, paddingBottom: 0, height: '36px' }
        }}
        multiple={multiple}
      >
        {options?.map((option) => (
          <MenuItem value={option?.value}>
            <ListItemText primary={option.name} />
            {option?.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
