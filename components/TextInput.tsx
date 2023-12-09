import { Icon, IconButton, TextField, styled } from '@mui/material'
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
