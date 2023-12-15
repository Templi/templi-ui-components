import { Divider, IconButton } from '@mui/material'
import { Icon } from './Icon'
import IconButtonGroup from './IconButtonGroup'
import { HorizontalRule } from '@mui/icons-material'
import { Dispatch, SetStateAction, useState } from 'react'
import { DatePicker } from '@mui/lab'
import StyledModal from './StyledModal'
import { StyledCheckbox } from './StyledCheckbox'
import { TextInput } from './TextInput'
import { TableHeader } from './Table'

type TableColumnFilterHeaderProps = {
  headers: TableHeader[]
  setHeaders: Dispatch<SetStateAction<TableHeader[]>>
  id: string
}

export default function TableColumnFilterHeader(
  props: TableColumnFilterHeaderProps
) {
  const { headers, setHeaders, id } = props
  const headerNoActions = headers.filter((item) => {
    return item?.name?.toUpperCase() !== 'ACTIONS'
  })
  const [showViews, setShowViews] = useState(false)
  const [showColumnFilter, setShowColumnFilter] = useState(false)

  const handleChange = (name: string, display: boolean) => {
    const localHeaders = [...headers]
    const sessionHeaders =
      typeof window !== 'undefined' ? sessionStorage.getItem(id) : []
    if (display) {
    } else {
      const newLocalHeaders = localHeaders.filter(
        (header) => header?.name !== name
      )
    }
  }

  return (
    <div className='w-full flex items-center justify-end mb-[4px]'>
      <IconButtonGroup
        iconName='filter_list'
        label='Views'
        onClick={() => setShowViews(true)}
      />
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        className='ml-[8px]'
      />
      <IconButtonGroup
        iconName='settings'
        label='Columns'
        onClick={() => setShowColumnFilter(true)}
      />
      <Divider
        orientation='vertical'
        variant='middle'
        flexItem
        className='ml-[8px]'
      />
      <IconButtonGroup iconName='calendar_month' label='Date Range' />
      <StyledModal
        isDiplayed={showViews}
        setIsDisplayed={setShowViews}
        onClose={() => setShowViews(false)}
        title='Views'
        content={
          <div className='p-[20px] w-full flex flex-col items-start justify-center gap-[4px]'>
            {headerNoActions.map((header) => (
              <div className='grid grid-cols-[60fr_40fr] items-center justify-center'>
                <TextInput />
                <span className='ml-[12px]'>{header?.name}</span>
              </div>
            ))}
          </div>
        }
      />
      <StyledModal
        isDiplayed={showColumnFilter}
        setIsDisplayed={setShowColumnFilter}
        onClose={() => setShowColumnFilter(false)}
        title='Columns'
        maxWidthPercentage={50}
        content={
          <div className='p-[20px] w-full flex flex-col items-start justify-center'>
            {headerNoActions.map((header) => (
              <div className='grid grid-cols-[20fr_80fr] items-center justify-center'>
                <StyledCheckbox
                  checked={header?.display ?? true}
                  onChange={() =>
                    handleChange(header?.name, header?.display ?? false)
                  }
                />
                <span>{header?.name}</span>
              </div>
            ))}
          </div>
        }
      ></StyledModal>
    </div>
  )
}
