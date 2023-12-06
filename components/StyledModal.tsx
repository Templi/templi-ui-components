import { Modal } from '@mui/material'
import { Dispatch, SetStateAction } from 'react'
import { SlideinModalHeader } from './SlideinModalHeader'

type StyledModalProps = {
  isDiplayed: boolean
  setIsDisplayed: Dispatch<SetStateAction<boolean>>
  onClose?: () => void | undefined
  header?: React.ReactNode
  content?: React.ReactNode
  modalId?: string
}
export default function StyledModal(props: StyledModalProps) {
  const { modalId, isDiplayed, setIsDisplayed, onClose, header, content } =
    props
  return (
    <Modal
      className='z-10 overflow-y-auto'
      id={modalId}
      open={isDiplayed}
      onClose={onClose}
    >
      <div className='absolute left-[15vw] min-h-[400px] [top-[5vh] w-[70vw] rounded-md border-solid bg-pure-white md:left-[25vw] md:w-[50vw] lg:left-[25vw]'>
        {header}
        {!header && (
          <SlideinModalHeader
            title='Modal'
            onClose={onClose}
          ></SlideinModalHeader>
        )}
        {content}
      </div>
    </Modal>
  )
}
