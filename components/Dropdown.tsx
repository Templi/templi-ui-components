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
  setSelected: React.Dispatch<React.SetStateAction<any>>
}
export function Dropdown(props: DropdownProps) {
  const { options, label, setSelected, selected } = props

  const handleChange = (event: SelectChangeEvent) => {
    setSelected(event.target.value)
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
          }
        }}
      >
        {options?.map((option) => {
          return <MenuItem value={option?.value}>{option?.label}</MenuItem>
        })}
      </Select>
    </FormControl>
  )
}
