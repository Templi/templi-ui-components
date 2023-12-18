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
  maxWidthPercentage?: number
  title?: string
  size?: 'sm' | 'md' | 'lg'
}
export default function StyledModal(props: StyledModalProps) {
  const {
    modalId,
    isDiplayed,
    setIsDisplayed,
    onClose,
    header,
    content,
    maxWidthPercentage = 70,
    title,
    size = 'lg'
  } = props
  const width = `w-[${maxWidthPercentage}vw]`
  const left = `calc(left-[${(100 - maxWidthPercentage) / 2}vw])`

  return (
    <Modal
      className='z-10 overflow-y-auto'
      id={modalId}
      open={isDiplayed}
      onClose={onClose}
    >
      <div>
        {size === 'sm' && (
          <div
            className={`absolute min-h-[200px] top-[5vh] left-[calc(38vw)] w-[24vw] rounded-md border-solid bg-pure-white`}
          >
            {header}
            {!header && (
              <SlideinModalHeader
                title={title ?? ''}
                onClose={onClose}
              ></SlideinModalHeader>
            )}
            {content}
          </div>
        )}
        {size === 'lg' && (
          <div
            className={`absolute min-h-[400px] top-[5vh] ${width} ${left} rounded-md border-solid bg-pure-white md:left-[25vw] md:w-[50vw] lg:left-[25vw]`}
          >
            {header}
            {!header && (
              <SlideinModalHeader
                title={title ?? ''}
                onClose={onClose}
              ></SlideinModalHeader>
            )}
            {content}
          </div>
        )}
      </div>
    </Modal>
  )
}
