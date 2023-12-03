import { ReactNode } from 'react'
import { Icon } from './Icon'
import Button from '@mui/material/Button'
import { styled } from '@mui/material'
import { Spinner } from './Spinner'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  color?:
    | 'gold'
    | 'grey'
    | 'white'
    | 'blue'
    | 'green'
    | 'red'
    | 'purple'
    | 'blank'
  label?: string | ReactNode
  iconName?: string
  iconClassName?: string
  loading?: boolean
}

const colorMap = {
  gold: {
    bg: 'bg-[#EDAB00]/5',
    bgHover: '#EDAB00',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: '#EDAB00'
  },
  grey: {
    bg: 'bg-[#EDAB00]/5',
    bgHover: '#EDAB00',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: 'EDAB00'
  },
  white: {
    bg: 'bg-pure-white',
    bgHover: 'hover:bg-pure-white-hover',
    loading: 'bg-pure-white-hover',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: 'white'
  },
  blue: {
    bg: 'bg-[#2872E1]/5',
    bgHover: '#2872E1',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: '#2872E1'
  },
  green: {
    bg: 'bg-[#04A11D]/5',
    bgHover: '#04A11D',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: '#04A11D'
  },
  red: {
    bg: 'bg-[#F30F0F]/5',
    bgHover: '#F30F0F',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: '#F30F0F'
  },
  purple: {
    bg: 'bg-[#680BC5]/5',
    bgHover: '#680BC5',
    loading: 'bg-[#DCAE12]',
    text: 'text-tight-black',
    txtHover: 'hover:text-[white]',
    spinnerColor: '#680BC5'
  },
  blank: {
    bg: '',
    bgHover: '',
    loading: '',
    text: '',
    txtHover: '',
    spinnerColor: 'purple'
  }
}

export function StyledButton(props: ButtonProps) {
  const {
    type,
    label,
    color = 'gold',
    loading = false,
    iconName,
    className,
    disabled,
    iconClassName,
    ...otherProps
  } = props

  const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: 'black',
    backgroundColor: colorMap[color].bg,
    borderColor: colorMap[color].bgHover,
    borderWidth: '2px',
    '&:hover': {
      backgroundColor: colorMap[color].bgHover,
      borderColor: colorMap[color].bgHover
    }
  }))

  return (
    <ColorButton
      variant='outlined'
      className={`min-w-[160px] w-full lg:w-auto min-h-[32px] p-0 normal-case ${colorMap[color].bg} ${colorMap[color].txtHover}`}
      disabled={disabled || loading}
      loading={loading}
      fullWidth
      {...otherProps}
    >
      {!loading && <span className='py-0'>{label}</span>}
      {!loading && iconName && (
        <Icon
          name={iconName}
          className={`ml-[10px] align-middle ${iconClassName ?? 'text-2xl'}`}
        />
      )}
      {loading && (
        <div className='flex items-center justify-cennter'>
          <Spinner color={colorMap[color].spinnerColor as 'white' | 'purple'} />
        </div>
      )}
    </ColorButton>
  )
}
