type TextLabelProps = {
  text: string
  color?:
    | 'gold'
    | 'black'
    | 'blue'
    | 'green'
    | 'red'
    | 'purple'
    | 'pink'
    | 'blank'
  className?: string
  onClick?: () => void
}

const colorMap = {
  'gold-black': {
    bg: 'bg-[#FFD630]',
    border: 'border-[black]',
    text: 'text-black'
  },
  gold: {
    bg: 'bg-[#FFD630]/5',
    border: 'border-[#FFD630]',
    text: 'text-[#FFD630]'
  },
  pink: {
    bg: 'bg-[#FF3AD4]/5',
    border: 'border-[#FF3AD4]',
    text: 'text-[#FF3AD4]'
  },
  blue: {
    bg: 'bg-[#2872E1]/5',
    border: 'border-[#2872E1]',
    text: 'text-[#2872E1]'
  },
  green: {
    bg: 'bg-[#04A11D]/5',
    border: 'border-[#04A11D]',
    text: 'text-[#04A11D]'
  },
  red: {
    bg: 'bg-[#F30F0F]/5',
    border: 'border-#F30F0F',
    text: 'text-[#F30F0F]'
  },
  purple: {
    bg: 'bg-[#680BC5]/5',
    border: 'border-[#680BC5]',
    text: 'text-[#680BC5]'
  },
  black: {
    bg: 'bg-black/5',
    border: 'border-black',
    text: 'text-blaclk'
  },
  blank: {
    bg: '',
    border: '',
    text: ''
  }
}

export default function TextLabel(props: TextLabelProps) {
  const { text, color = 'black', onClick, className } = props
  return (
    <span
      className={`text-[12px] py-[4px] px-[12px] rounded-[2px] border-2 border-solid flex items-center justify-center min-w-[120px] ${
        onClick ? 'cursor-pointer' : ''
      } ${colorMap[color].bg} ${colorMap[color].border} ${
        colorMap[color].text
      } ${className}`}
      onClick={onClick}
    >
      {text}
    </span>
  )
}
