import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton'
import { SystemUpdateAlt } from '@mui/icons-material'

type MassUpdateTextInputProps = {
  placeholder?: string
  onClick?: () => void
  disabled?: boolean
  className?: string
}

export default function MassUpdateTextInput(props: MassUpdateTextInputProps) {
  const { placeholder, onClick, disabled, className } = props
  return (
    <div
      className={`border-[1px] rounded-[4px] flex items-center justify-between min-w-[160px] h-[36px] ${className}`}
    >
      <InputBase
        sx={{ flex: 1, padding: 0, borderRadius: '4px' }}
        placeholder={placeholder ?? 'Update...'}
        inputProps={{
          'aria-label': 'MassUpdate',
          style: {
            height: '18px',
            borderRadius: '4px'
          }
        }}
        size='small'
        disabled={disabled}
      />
      <IconButton
        type='button'
        aria-label='mass-update'
        className='pr-[8px] text-[16px]'
        onClick={onClick}
      >
        <SystemUpdateAlt className='text-black' fontSize='inherit' />
      </IconButton>
    </div>
  )
}
