import { Select, Switch, TextareaAutosize } from '@mui/material'
import { Dropdown } from './Dropdown'
import { TextInput } from './TextInput'
import SlideInDrawer from './SlideInDrawer'
import { useState } from 'react'
import { StyledButton } from './StyledButton'
import FileUpload from './FileUpload'

export default function AddNewProductPage() {
  const [showSlideInDrawer, setShowSlideInDrawer] = useState(false)
  const [selectedSize, setSelectedSize] = useState()

  return (
    <div className='flex flex-col items-start justify-center w-full mb-[250px]'>
      <span className='font-bold text-3xl mb-10'>New Product Page</span>
      <div />
      <div className='grid grid-cols-[20fr_80fr] items-center w-full gap-y-[20px] gap-x-[40px]'>
        <span className='font-bold flex justify-end'>Enable Product</span>
        <span className='font-bold flex justify-start'>
          <Switch size='small'></Switch>
        </span>
        <span className='font-bold flex justify-end'>Attribute Set</span>
        <span className='font-bold flex justify-start w-[400px]'>
          <Dropdown
            options={[
              { value: 'sm', label: 'Default' },
              { value: 'md', label: 'Option 1' },
              { value: 'lg', label: 'Option 2' }
            ]}
            selected={selectedSize}
            setSelected={setSelectedSize}
          ></Dropdown>
        </span>
        <span className='font-bold flex justify-end'>SKU</span>
        <span className='font-bold flex justify-start w-[400px]'>
          <TextInput className='lg:w-[400px]' />
        </span>
        <span className='font-bold flex justify-end items-start h-full'>
          Description
        </span>
        <span className='flex justify-start w-[400px]'>
          <TextareaAutosize
            className='lg:w-[400px] h-[250px]'
            maxRows={5}
            minRows={5}
          />
        </span>

        <span className='font-bold flex justify-end'>Configurations</span>
        <span className='font-bold flex justify-start'>
          <StyledButton
            label='Open Config'
            color='blue'
            onClick={() => setShowSlideInDrawer(true)}
            className='w-[190px]'
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
            headerIcon='settings'
            headerTitle='Configurations'
            size={'lg'}
          />
        </span>
        <span className='font-bold flex justify-end items-start h-full'></span>
        <span className='font-bold flex-col justify-start w-[400px] gap-[20px]'>
          <span className='font-bold mb-[20px]'>Images and Video</span>
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
        </span>
      </div>
    </div>
  )
}
