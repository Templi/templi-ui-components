import { checkboxClasses, createTheme } from '@mui/material'
import { Checkbox } from '@mui/material'

const checkBoxStyles = () => ({
  root: {
    '&$checked': {
      color: '#white'
    }
  },
  checked: {}
})

type StyledCheckboxProps = {
  checked: boolean
}

export function StyledCheckbox(props: StyledCheckboxProps) {
  const { checked } = props
  return (
    <Checkbox
      checked={checked}
      sx={{
        color: 'red',
        [`&, &.${checkboxClasses.checked}`]: {
          color: 'black'
        }
      }}
    ></Checkbox>
  )
}
