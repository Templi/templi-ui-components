import { Icon, IconButton, TextField, styled } from '@mui/material'
import React, { Dispatch, ReactNode, SetStateAction } from 'react'

type TextInputAdditionalProps = {
  topLabel?: ReactNode
  error?: boolean
  containerClassName?: string
  helperText?: string
  noLabel?: boolean
  fullWidth?: boolean
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void
  setValue?: Dispatch<SetStateAction<any>>
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
  height: ;
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
      setValue,
      noLabel = false,
      fullWidth,
      onKeyDown,
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
        onChange={(e) => setValue(e.target.value)}
        fullWidth={fullWidth}
        onKeyDown={onKeyDown}
        inputProps={{
          style: {
            height: '20px'
          }
        }}
      />
    )
  }
)

export { TextInput }
