import { useRef, useState, useEffect, useMemo } from 'react'

import { useScroll, useTransform } from 'framer-motion'
import { LazyMotion, domAnimation, m } from 'framer-motion'

interface IParallaxProps {
  children: React.ReactNode
  yOffset?: number
  easing?: Array<number>
  triggerPoint?: number
  fadeOut?: boolean
 
  [key: string]: any
}

export default function Parallax({
  children,
  yOffset = 2048,
  easing = [0.42, 0, 0.58, 1],
  triggerPoint = 0.1,
  fadeOut = false,
  ...props
}: IParallaxProps) {
  const { scrollY } = useScroll()
  const ref = useRef<HTMLDivElement>()
  const [elementTop, setElementTop] = useState<number>(0)
  const [elementBottom, setElementBottom] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)

  useEffect(() => {
    if (!ref.current) return

    const element = ref.current

    const setValues = () => {
      setElementTop(element.offsetTop)
      setElementBottom(element.offsetTop + element.offsetHeight)
      setClientHeight(window.innerHeight)
    }

    setValues()
    window.addEventListener('resize', setValues)
    document.addEventListener('load', setValues)

    return () => {
      window.removeEventListener('resize', setValues)
      document.removeEventListener('load', setValues)
    }
  }, [ref, yOffset])

  const transformInitialValue = elementTop - clientHeight * triggerPoint
  const transformFinalValue = elementTop + yOffset

  const yRange = [transformInitialValue, transformFinalValue]

  
  const y = useTransform(scrollY, yRange, [0, -yOffset], easing as any)

  const opacityInitialValue = fadeOut ? 0 : 1
  const opacityRange = useMemo(
    () => [opacityInitialValue, 1],
    [opacityInitialValue]
  )

  const yOpacityRange = [elementBottom, transformFinalValue - yOffset]
  const opacity = useTransform(scrollY, yOpacityRange, opacityRange)

  return (
    <LazyMotion features={domAnimation}>
      {' '}
      <m.div
    
        ref={ref as any}
        initial={{ y: 0 }}
        style={{ y, opacity }}
        {...props}
      >
        {children}
      </m.div>
    </LazyMotion>
  )
}
