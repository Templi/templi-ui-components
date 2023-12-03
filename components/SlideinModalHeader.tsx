import { Icon } from './Icon'

export type SlideinModalHeaderProps = {
  title: string
  subText?: string
  icon?: string
  onClose?: () => unknown
  className?: string
  titleClassName?: string
}

export function SlideinModalHeader(props: SlideinModalHeaderProps) {
  const { title, subText, icon, onClose, className, titleClassName } = props
  return (
    <div
      className={`sticky top-0 z-20 flex items-center justify-between  bg-templi-lightgray px-[20px] py-[18px] lg:pl-[35px] ${className}`}
    >
      <span
        className={`Type-XXXL-Bold flex items-center gap-[10px] text-black ${titleClassName}`}
      >
        {icon && <Icon name={icon} className='text-[32px]' />}
        <span>{title} </span>
        <span className='Type-XXL-Bold text-templi-darkestgray'>{subText}</span>
      </span>
      {onClose && (
        <button
          type='button'
          className='flex cursor-pointer items-center justify-center'
          onClick={() => onClose()}
        >
          <Icon name='disabled_by_default' className='text-[32px] text-black' />
        </button>
      )}
    </div>
  )
}
