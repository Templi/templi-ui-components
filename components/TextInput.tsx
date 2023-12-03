import { TextField, styled } from '@mui/material'
import React, { ReactNode } from 'react'

type TextInputAdditionalProps = {
  topLabel?: ReactNode
  error?: boolean
  containerClassName?: string
  helperText?: string
  noLabel?: boolean
}

type TextInputProps = TextInputAdditionalProps &
  React.HTMLProps<HTMLInputElement>

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-notchedOutline {
    border-color: black;
  }
  & .Mui-error {
    color: red;
  }
`

const TextInput = React.forwardRef<HTMLInputElement, TextInputProps>(
  (props: TextInputProps, ref) => {
    const {
      topLabel,
      className,
      placeholder,
      required,
      error = false,
      containerClassName = '',
      children,
      helperText = '',
      disabled,
      defaultValue,
      value,
      noLabel = false,
      ...otherProps
    } = props

    return (
      //   <div className={containerClassName}>
      //     {topLabel && (
      //       <p
      //         className={`Type-Base-Regular mb-[3px] ml-[10px]  ${
      //           error ? 'text-red' : 'text-tight-black'
      //         }`}
      //       >
      //         {topLabel} {required && <span>*</span>}
      //       </p>
      //     )}
      //     <input
      //       ref={ref}
      //       className={`rounded-[5px] border-[1px]  bg-transparent px-[10px] py-[4px] text-xl outline-none focus:shadow-none focus:outline-0 ${
      //         error ? 'border-red text-red' : 'border-tight-black text-black'
      //       } ${
      //         error ? 'placeholder:text-red' : 'placeholder:text-50-grey'
      //       } ${className}`}
      //       placeholder={placeholder && `${placeholder} ${required ? '*' : ''}`}
      //       required={required}
      //       {...otherProps}
      //     />
      //     {helperText && (
      //       <p className='Type-Small-Regular mt-[3px] text-red'>{helperText}</p>
      //     )}
      //     {children}
      //   </div>
      <StyledTextField
        size='small'
        label={noLabel ? '' : topLabel}
        variant='outlined'
        error={error}
        helperText={helperText}
        disabled={disabled}
        className={`min-w-[160px] lg:w-auto w-full ${className}`}
        required={required}
        defaultValue={defaultValue ?? topLabel}
        value={value}
      />
    )
  }
)

export { TextInput }
