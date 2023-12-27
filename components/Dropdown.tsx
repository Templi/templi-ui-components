import { useState } from 'react'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { StyledCheckbox } from './StyledCheckbox'
import { ListItemText } from '@mui/material'
import { TextInput } from './TextInput'
import { join } from 'path'
import { render } from 'react-dom'

type DropdownProps = {
  label?: string
  options: any[]
  selected?: any | any[]
  setSelected?: React.Dispatch<React.SetStateAction<any | any[]>>
  disabled?: boolean
  className?: string
  fullWidth?: boolean
  multiple?: boolean
  customInput?: boolean
  renderCheckbox?: boolean
  placeholder?: string
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
    multiple,
    customInput,
    renderCheckbox,
    placeholder
  } = props

  // Remove highlight when option is selected, and add checkbox instead
  // Also add option to Select/Deselect All options
  const [localOptions, setLocalOptions] = useState<any[]>(options)
  const [textFieldValue, setTextFieldValue] = useState<string>('')

  const handleAddMenuOptions = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    event.stopPropagation()
    const {
      target: { value }
    } = event as any
    if (event.code === 'Enter' && value?.trim()?.length > 0) {
      setLocalOptions([...localOptions, { value: value, label: value }])
    }
  }

  const handleChange = (event: SelectChangeEvent) => {
    if (setSelected) {
      const {
        target: { value }
      } = event
      setSelected(typeof value === 'string' ? value.split(',') : value)
    }
  }
  return (
    <FormControl size='small' className={`${fullWidth ? 'w-full' : ''}`}>
      {(!renderCheckbox || (selected?.length <= 0 && renderCheckbox)) && (
        <InputLabel className='text-[14px]'>{label ?? placeholder}</InputLabel>
      )}
      <Select
        value={selected ?? []}
        label={
          !renderCheckbox || selected?.length <= 0 ? label ?? placeholder : ''
        }
        onChange={handleChange}
        size='small'
        className={`min-w-[160px] truncate ${
          fullWidth ? 'w-full' : 'w-[160px]'
        } ${className}`}
        sx={{
          padding: 0,
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'black'
          },
          '& .MuiSelect-select': {
            display: 'block',
            verticalAlign: 'middle',
            textAlign: 'left',
            justifyItems: 'center',
            alignItems: 'center',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            lineHeight: '36px',
            height: '36px'
          }
        }}
        disabled={disabled}
        SelectDisplayProps={{
          style: { paddingTop: 0, paddingBottom: 0, height: '36px' }
        }}
        multiple={multiple}
        renderValue={(selected) => {
          if (selected.length === 0) {
            return <em>{placeholder ?? label}</em>
          }

          return typeof selected === 'string' ? (
            options.find((i) => i.value === selected)?.label
          ) : !renderCheckbox ? (
            (selected as Array<any>)?.map(
              (s, index) =>
                options.find((i) => i.value === s)?.label +
                `${index === (selected as any)?.length - 1 ? '' : ', '}`
            )
          ) : (
            <span className='text-[14px] text-black/60'>{placeholder}</span>
          )
        }}
      >
        {placeholder && (
          <MenuItem disabled value=''>
            <span className='text-gray'>{placeholder}</span>
          </MenuItem>
        )}

        {localOptions?.map((option) => (
          <MenuItem value={option?.value}>
            {renderCheckbox && (
              <StyledCheckbox
                checked={selected?.join(',')?.indexOf(option.value) > -1}
              />
            )}
            {option?.label}

            {/* {renderCheckbox && <ListItemText primary={option.label} />} */}
          </MenuItem>
        ))}
        {customInput && (
          <TextInput
            className='flex items-center justify-center px-[16px]'
            fullWidth
            onKeyDown={(e) => handleAddMenuOptions(e)}
            // value={textFieldValue}
          />
        )}
      </Select>
    </FormControl>
  )
}
