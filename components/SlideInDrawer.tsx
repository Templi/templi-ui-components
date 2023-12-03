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
    headerSubText
  } = props
  return (
    <SwipeableDrawer
      anchor='right'
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      classes={{
        paper: 'rounded-l-[10px] max-w-[520px] min-w-[350px]'
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
