type IconProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  name: string
  className?: string
}

export const Icon = ({ name, className = '', ...otherProps }: IconProps) => (
  // eslint-disable-next-line tailwindcss/no-custom-classname
  <span className={`material-symbols-outlined ${className}`} {...otherProps}>
    {name}
  </span>
)
