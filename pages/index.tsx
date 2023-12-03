import Image from 'next/image'
import { Inter } from 'next/font/google'
import Table from '@/components/Table'
import { StyledButton } from '@/components/StyledButton'
import { TextField } from '@mui/material'
import { TextInput } from '@/components/TextInput'
import SlideInDrawer from '@/components/SlideInDrawer'
import { useState } from 'react'
import TextLabel from '@/components/TextLabel'

export default function Home() {
  const [showSlideInDrawer, setShowSlideInDrawer] = useState(false)

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
        <TextLabel text='Purple' color='#967BB4'></TextLabel>
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>IV. Slide-in Drawer</span>
        <StyledButton
          label='Open Slide-in Drawer'
          color='purple'
          onClick={() => setShowSlideInDrawer(true)}
        />
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
        />
      </div>
      <div className='flex flex-col items-start justify-center gap-3'>
        <span className='font-bold'>II. Table</span>
        <Table></Table>
      </div>
    </main>
  )
}
