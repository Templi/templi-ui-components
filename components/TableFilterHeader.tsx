import { SetStateAction } from 'react'
import SearchTextInput from './SearchTextInput'
import FilterButton from './FilterButton'

type TableFilterHeaderProps = {
  filter: string[]
  setFilter: React.Dispatch<React.SetStateAction<string[]>>
}

export default function TableFilterHeader() {
  return (
    <div className='flex items-center justify-start '>
      <div className='flex items-start gap-[12px] justify-center'>
        <SearchTextInput />
        <FilterButton text='Flamingo Paper' />
        <FilterButton text='Add filter' isAddFilter />
      </div>
    </div>
  )
}
