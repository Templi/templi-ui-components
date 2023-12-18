import * as React from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'

type DropdownProps = {
  label?: string
  options: any[]
  selected?: any
  setSelected?: React.Dispatch<React.SetStateAction<any>>
  disabled?: boolean
}
export function Dropdown(props: DropdownProps) {
  const { options, label, setSelected, selected, disabled } = props

  const handleChange = (event: SelectChangeEvent) => {
    if (setSelected) {
      setSelected(event.target.value)
    }
  }
  return (
    <FormControl fullWidth>
      <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
      <Select
        value={selected}
        label={label}
        onChange={handleChange}
        size='small'
        className='min-w-[160px]'
        sx={{
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'black'
          },
          '&::placeholder': {
            fontSize: '12px'
          }
        }}
        disabled={disabled}
      >
        {options?.map((option) => {
          return <MenuItem value={option?.value}>{option?.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
