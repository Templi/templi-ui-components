import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/Table'
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

export default function Home() {
  const [showSlideInDrawer, setShowSlideInDrawer] = useState(false)
  const [slideInDrawerSize, setSlideInDrawerSize] = useState('')

  return (
    <main
      className={`flex min-h-screen flex-col items-start justify-start p-[20px] gap-[60px]`}
    >
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>I. Buttons</span>
        <div className='flex flex-col lg:flex-row items start justify-center gap-4 lg:gap-2 lg:w-auto w-full'>
          <StyledButton label='Cancel' color='gold' />
          <StyledButton label='Add' color='blue' iconName='add_circle' />
          <StyledButton label='Save' color='green' />
          <StyledButton label='Delete' color='red' iconName='delete' />
          <StyledButton label='Duplicate' color='purple' />
        </div>
        <div className='flex items start justify-center gap-2'>
          <StyledButton label='Cancel' color='gold' disabled />
          <StyledButton
            label='Add'
            color='blue'
            disabled
            iconName='add_circle'
          />
          <StyledButton label='Save' color='green' disabled />
          <StyledButton label='Delete' color='red' disabled iconName='delete' />
          <StyledButton label='Duplicate' color='purple' disabled />
        </div>
        <div className='flex items start justify-center gap-2'>
          <StyledButton label='Cancel' color='gold' loading />
          <StyledButton
            label='Add'
            color='blue'
            loading
            iconName='add_circle'
          />
          <StyledButton label='Save' color='green' loading />
          <StyledButton label='Delete' color='red' loading iconName='delete' />
          <StyledButton label='Duplicate' color='purple' loading disabled />
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3 w-full'>
        <span className='font-bold'>II. Text Field</span>
        <div className='flex flex-col lg:flex-row items start justify-center lg:gap-2 gap-5 lg:w-auto w-full'>
          <TextInput topLabel='Normal' />
          <TextInput topLabel='No Label' noLabel />
          <TextInput topLabel='Required' required />
          <TextInput
            topLabel='Email'
            error
            helperText='This email has already been used'
            value='j.arias@templi.com'
          />
          <TextInput topLabel='Disabled' disabled />
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>III. Text Label</span>
        <div className='flex gap-3'>
          {' '}
          <TextLabel text='Processing' color='purple'></TextLabel>
          <TextLabel text='Proofing' color='pink'></TextLabel>
          <TextLabel text='In Production' color='blue'></TextLabel>
          <TextLabel text='Shipped' color='green'></TextLabel>
          <TextLabel text='Replenish' color='gold'></TextLabel>
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>IV. Text Tags</span>
        <div className='flex gap-3'>
          {' '}
          <TextTag text='Rush Order' textColor='black' bgColor='#C6F1DC' />
          <TextTag text='Shipping TBD' textColor='black' bgColor='#E7796D' />
          <TextTag
            text='Artwork Update or Approval'
            textColor='black'
            bgColor='#F1A76E'
          />
          <TextTag text='ON HOLD' textColor='white' bgColor='#B94335' />
          <TextTag text='Dynamic Test' textColor='gold' bgColor='purple' />
        </div>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>V. Slide-in Drawer</span>
        <StyledButton
          label='Open Slide-in Drawer'
          color='purple'
          onClick={() => setShowSlideInDrawer(true)}
        />
        <Dropdown
          label='Size'
          options={[
            { value: 'sm', label: 'Small' },
            { value: 'md', label: 'Medium' },
            { value: 'lg', label: 'Large' }
          ]}
          setSelected={setSlideInDrawerSize}
          selected={slideInDrawerSize}
        ></Dropdown>
        <SlideInDrawer
          anchor='right'
          content={
            <div className='w-full flex items-center justify-center'>
              <span className='mt-[200px] '>This is a sample content</span>
            </div>
          }
          onClose={() => {
            setShowSlideInDrawer(false)
          }}
          onOpen={() => {}}
          open={showSlideInDrawer}
          headerIcon='shopping_bag'
          headerTitle='Sample Cart'
          headerSubText='(5)'
          size={slideInDrawerSize}
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>VI. File Upload</span>
        <FileUpload
          apiCall={() => {
            alert('File uploaded')
            return Promise.resolve()
          }}
          files={[]}
          setUploadedFile={() => {
            return false
          }}
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>VII. Table</span>
        <Table></Table>
      </div>
      <AddNewProductPage />
    </main>
  )
}
