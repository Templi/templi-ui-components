import { IconButton, InputBase } from '@mui/material'
import ListIcon from '@mui/icons-material/List'
import AddIcon from '@mui/icons-material/Add'

type FilterButtonProps = {
  text?: string
  onClick?: () => void
  disabled?: boolean
  isAddFilter?: boolean
}

export default function FilterButton(props: FilterButtonProps) {
  const { text, onClick, disabled, isAddFilter = false } = props
  return (
    <button className='border-[1px] flex items-center justify-between min-w-[160px] border-templi-darkestgray rounded-[20px]'>
      <IconButton
        type='button'
        aria-label='search'
        className='pr-[8px] flex'
        onClick={onClick}
      >
        {isAddFilter ? (
          <AddIcon className='text-templi-darkestgray' />
        ) : (
          <ListIcon className='text-templi-darkestgray' />
        )}
      </IconButton>{' '}
      <span className='text-[14px] mx-[12px]'>{text}</span>
    </button>
  )
}
