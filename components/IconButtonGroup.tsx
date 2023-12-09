import { IconButton } from '@mui/material'
import { Icon } from './Icon'

type IconButtonGroupProps = {
  label?: string
  onClick?: () => void
  iconName?: string
}
export default function IconButtonGroup(props: IconButtonGroupProps) {
  const { label, onClick, iconName } = props
  return (
    <button onClick={onClick} className='flex items-center justify-center'>
      <IconButton
        type='button'
        aria-label={iconName}
        className='pr-[8px] flex justify-between'
        onClick={onClick}
      >
        <Icon name={iconName ?? ''} className='text-[24px]' />
      </IconButton>
      <span className='text-[12px] text-templi-darkestgray'>{label}</span>
    </button>
  )
}
