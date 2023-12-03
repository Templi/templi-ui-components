type TextLabelProps = {
  text: string
  color?: string
}

export default function TextLabel(props: TextLabelProps) {
  const { text, color = 'black' } = props
  return (
    <span
      className={`Type-Medium-Bold p-[4px] borer-2 border-solid border flex items-center justify-center min-w-[160px]`}
      style={{ color: color, borderColor: color }}
    >
      {text}
    </span>
  )
}
