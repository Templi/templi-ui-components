import { SwipeableDrawer } from '@mui/material'
import { SlideinModalHeader } from './SlideinModalHeader'

export type SlideInDrawerProps = {
  anchor: 'left' | 'right' | 'top' | 'bottom'
  onClose: () => void
  onOpen: () => void
  open: boolean
  content: React.ReactNode
  headerIcon?: string
  headerTitle?: string
  headerSubText?: string
  size?: 'sm' | 'md' | 'lg' | string | undefined
}

export default function SlideInDrawer(props: SlideInDrawerProps) {
  const {
    anchor,
    content,
    onClose,
    onOpen,
    open,
    headerIcon,
    headerTitle,
    headerSubText,
    size
  } = props
  return (
    <SwipeableDrawer
      anchor='right'
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      classes={{
        paper: `rounded-l-[10px] max-w-[520px] min-w-[350px] ${
          size === 'md' ? 'max-w-[60vw] w-[50vw] min-w-[50vw]' : ''
        } ${size === 'lg' ? 'max-w-[90vw] w-[80vw] min-w-[80vw]' : ''}`
      }}
    >
      <SlideinModalHeader
        icon={headerIcon}
        title={headerTitle ?? ''}
        subText={headerSubText}
        onClose={onClose}
      />
      {content}
    </SwipeableDrawer>
  )
}
