type TextTagProps = {
  text: string
  textColor?: 'white' | 'black' | string
  bgColor?: string
  className?: string
}

export default function TextTag(props: TextTagProps) {
  const { text, textColor = 'black', bgColor = 'white', className } = props
  return (
    <span
      className={`text-[12px] font-bold py-[4px] px-[12px]  flex items-center justify-center min-w-[120px] rounded-[2px] ${className}`}
      style={{ color: textColor, backgroundColor: bgColor }}
    >
      {text}
    </span>
  )
}
