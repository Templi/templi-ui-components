import { Dispatch, SetStateAction, useRef, useState } from 'react'
import { Icon } from './Icon'
import { LinearProgress, styled } from '@mui/material'

type FileUploadProps = {
  setUploadedFile: Dispatch<SetStateAction<any>>
  apiCall: () => Promise<any>
  modalId?: string
  files: any[]
  subText?: string
}

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 6,
  borderRadius: 5,
  backgroundColor: '#D1D3D4'
}))

export default function FileUpload(props: FileUploadProps) {
  const { setUploadedFile, apiCall, files, subText } = props
  const [isUploadingFiles, setIsUploadingFiles] = useState<boolean>(false)
  const [localFiles, setLocalFiles] = useState<Array<any>>(files)
  const [disableUpload, setDisableUpload] = useState<boolean>(
    localFiles?.length <= 0
  )
  const inputFilesRef = useRef(null)
  const [progress, setProgress] = useState<number>(0)
  const [error, setError] = useState<Error>()

  const handleDrop = async (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault()
    if (event?.dataTransfer?.files) {
      const filesArray = Array.from(event?.dataTransfer?.files)
      const localUploadedFiles = [...localFiles]
      for (let idx = 0; idx < filesArray.length; idx++) {
        setIsUploadingFiles(true)
        const s3FileName = `artworks/${Date.now()}-${filesArray[idx].name}`
        // eslint-disable-next-line no-await-in-loop
        const signedUrl = await apiCall().catch((e: Error) => {
          setError(e)
          setIsUploadingFiles(false)
        })
      }
    }
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }

  const handleRemoveItem = (index: number) => {
    const localFilesCopy = [...localFiles]
    setLocalFiles(localFilesCopy.filter((item, idx) => idx !== index))
  }
  return (
    <div
      className='flex w-full flex-col items-start justify-center mt-[20px]'
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <label className='max-w-3/4 flex h-32 w-3/4 cursor-pointer flex-col items-center justify-center rounded-md border-2 border-dashed border-50-grey bg-5-grey px-4 transition hover:border-templi-blue hover:border-2 focus:outline-none'>
        <span className='flex items-center space-x-2'>
          <span className='text-gray-600 text-center font-medium'>
            'Drag and drop your art files, or'&nbsp;
            <span className='text-blue-600 underline'>'browse'</span>
          </span>
        </span>
        <Icon name='upload' className='mt-5 align-middle text-3xl' />
        <input
          type='file'
          name='file_upload'
          className='hidden'
          ref={inputFilesRef}
          onChange={apiCall}
          onDrop={handleDrop}
        />
      </label>
      <span className='Type-Base-Medium mt-2 text-70-grey'>{subText}</span>
      <div className='mt-5 flex min-h-[85px] flex-col items-center justify-center'>
        <div className='h-[10px] text-templi-purple'>
          {isUploadingFiles && (
            <BorderLinearProgress
              className='w-[50vw] max-w-[300px] lg:w-[300px]'
              variant='determinate'
              value={progress}
              color='inherit'
            />
          )}
        </div>
        <div className='mt-2 text-center lg:mt-5'>
          {localFiles.length > 0 &&
            localFiles?.map((item, index) => (
              <div
                key={item.url}
                className='lg:Type-Large-Medium Type-Regular-Medium inline border border-0 border-r-2 border-black px-2 text-templi-purple underline last:border-r-0'
              >
                <Icon
                  name='disabled_by_default'
                  className='mr-2 cursor-pointer align-middle text-xl lg:text-3xl'
                  onClick={() => handleRemoveItem(index)}
                />
                <a href={item.url} target='_blank' rel='noreferrer'>
                  {item.fileName}
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
