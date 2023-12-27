import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

type IncDecButtonProps = {
  placeHolder?: string
  onClick?: () => void
  disabled?: boolean
  incrementSize: number
  setValue: Dispatch<React.SetStateAction<number>>
  value: number
  allowNegativeVal?: boolean
}

export default function IncDecButton(props: IncDecButtonProps) {
  const {
    placeHolder,
    onClick,
    disabled,
    value = 0,
    setValue,
    incrementSize = 1,
    allowNegativeVal = false // if set to true, minue icon should deactivate
  } = props

  const handleChange = (e: ChangeEvent) => {
    if ((e.target as any)?.value.length === 0) {
      setValue(0)
    } else if (!isNaN((e.target as any)?.value)) {
      setValue(Number.parseInt((e.target as any)?.value))
    } else {
      setValue(0)
    }
  }

  const handleIncrement = () => {
    setValue(value + incrementSize)
  }

  const handleDecrement = () => {
    if (allowNegativeVal && value - incrementSize < 0) {
      setValue(value - incrementSize)
    } else if (value - incrementSize < 0) {
      setValue(0)
    } else {
      setValue(value - incrementSize)
    }
  }

  return (
    <div className='border-[1px] flex items-center justify-between min-w-[120px] w-[135px]'>
      <InputBase
        sx={{
          flex: 1,
          padding: 0,
          '& .MuiInputBase-input': {
            // avoid the use of !important
            textAlign: 'center'
          }
        }}
        placeholder={placeHolder ?? 'Search'}
        inputProps={{ 'aria-label': 'IncDecBtn' }}
        size='small'
        onChange={handleChange}
        disabled={disabled}
        value={value}
        endAdornment={
          <IconButton
            type='button'
            aria-label='search'
            className='pr-[8px]'
            onClick={handleIncrement}
            disabled={disabled || (allowNegativeVal && value == 1)}
          >
            <AddIcon className='text-black' />
          </IconButton>
        }
        startAdornment={
          <IconButton
            type='button'
            aria-label='search'
            className='pr-[8px]'
            onClick={handleDecrement}
            disabled={disabled}
          >
            <RemoveIcon className='text-black' />
          </IconButton>
        }
      />
    </div>
  )
}
