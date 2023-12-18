import { LocalizationProvider, StaticDateRangePicker } from '@mui/lab'
import { Box, TextField } from '@mui/material'
import React, { Dispatch, SetStateAction, useState } from 'react'
import AdapterDateFns from '@mui/lab/AdapterDateFns'

type StyledDateRangePickerProps = {
  value: [string, string]
  setValue: Dispatch<SetStateAction<[string, string]>>
}

export default function StyledDateRangePicker(
  props: StyledDateRangePickerProps
) {
  const { value, setValue } = props

  const currentDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  })

  return (
    <div className='w-full h-[200px] bg-red'>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <StaticDateRangePicker
          displayStaticWrapperAs='desktop'
          value={value}
          onChange={(newValue) => {
            setValue(newValue)
          }}
          renderInput={(startProps, endProps) => (
            <React.Fragment>
              <TextField {...startProps} />
              <Box sx={{ mx: 2 }}> to </Box>
              <TextField {...endProps} />
            </React.Fragment>
          )}
        />
      </LocalizationProvider>
    </div>
  )
}
