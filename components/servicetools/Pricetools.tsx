import { cn } from '../lib/classNames'

interface PriceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Pricetool({
    name,
  
    icon,
    url,
  }: PriceProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            'hover:bg-white dark:hover:bg-white',
            'rounded-lg ',
            'cursor-pointer'
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='flex '>
          <div className='px-1 text-xl text-gray-800 rounded-full font-sfprodisplayregular'>{icon}</div>
        <div className=''>
          <h2 className='text-gray-800 font-sfprodisplayregular'>{name}</h2>
            </div>
          </div>
        </a>
      )
    }