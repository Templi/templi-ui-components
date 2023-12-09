import * as React from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import DirectionsIcon from '@mui/icons-material/Directions'

type SearchTextInputProps = {
  placeHolder?: string
  onClick?: () => void
  disabled?: boolean
}

export default function SearchTextInput(props: SearchTextInputProps) {
  const { placeHolder, onClick, disabled } = props
  return (
    <div className='border-[1px] flex items-center justify-between min-w-[160px]'>
      <InputBase
        sx={{ flex: 1, padding: 0 }}
        placeholder={placeHolder ?? 'Search'}
        inputProps={{ 'aria-label': 'Search' }}
        size='small'
        disabled={disabled}
      />
      <IconButton
        type='button'
        aria-label='search'
        className='pr-[8px]'
        onClick={onClick}
      >
        <SearchIcon className='text-black' />
      </IconButton>
    </div>
  )
}
