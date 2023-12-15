import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table, { TableHeader } from '@/components/Table'
import { StyledButton } from '@/components/StyledButton'
import { TextField } from '@mui/material'
import { TextInput } from '@/components/TextInput'
import SlideInDrawer from '@/components/SlideInDrawer'
import { useState } from 'react'
import TextLabel from '@/components/TextLabel'
import TextTag from '@/components/TextTag'
import AddNewProductPage from '@/components/AddNewProductPage'
import { Dropdown } from '@/components/Dropdown'
import FileUpload from '@/components/FileUpload'
import StyledModal from '@/components/StyledModal'
import SearchTextInput from '@/components/SearchTextInput'
import TableFilterHeader from '@/components/TableFilterHeader'
import TableColumnFilterHeader from '@/components/TableColumnFilterHeader'

const localHeaders: TableHeader[] = [
  { name: 'Actions', isFilterable: false, display: true },
  { name: 'Supplier Name', isFilterable: false, display: true },
  { name: 'Phone', isFilterable: false, display: true },
  { name: 'Contact', isFilterable: false, display: true },
  { name: 'Customer Since', isFilterable: false, display: true },
  { name: 'Open Balance', isFilterable: false, display: true },
  { name: 'Accounting', isFilterable: false, display: true },
  { name: 'Payment Terms', isFilterable: false, display: true }
]

export default function Home() {
  const [showSlideInDrawer, setShowSlideInDrawer] = useState(false)
  const [slideInDrawerSize, setSlideInDrawerSize] = useState('')
  const [showModal, setShowModal] = useState(false)

  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-start p-[20px] gap-[60px] bg-templi-lightgray/5`}
    >
      <div className='flex flex-col items-start justify-center gap-3 w-full'>
        <span className='font-bold text-2xl mb-[40px]'>Suppliers</span>
        <TableFilterHeader />
        <Table headers={localHeaders} />
      </div>
    </main>
  )
}
