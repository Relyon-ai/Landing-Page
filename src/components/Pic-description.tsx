'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from './ui/button'

interface ValueProp {
  title: string
  description: string
}

interface SecurityServicesProps {
  headline?: string
  title: string
  valueProps?: ValueProp[]
  buttonText1?: string
  buttonText2?: string
  imageSrcs?: string[]
  isReversed?: boolean
  textSizeColor?: string[]
  clickHere?: boolean
}

export default function SecurityServices({
  headline,
  title,
  valueProps,
  buttonText1,
  buttonText2,
  imageSrcs = [],
  isReversed = false,
  textSizeColor =['sm', 'muted-foreground'],
  clickHere = false,
}: SecurityServicesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const ContentSection = () => (
    <div className={`flex-1 ${isReversed ? 'md:pl-8' : 'md:pr-8'}`}>
      <h2 className="text-sm font-semibold uppercase mb-2">{headline}</h2>
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      <div className="space-y-4 mb-8">
        {valueProps?.map((prop, index) => (
          <div key={index}>
            <h3 className="font-semibold">{prop.title}</h3>
            <p className={`text-${textSizeColor[0]} text-${textSizeColor[1]}`}>{prop.description} {index === valueProps.length - 1 && clickHere ? <button className='text-teal-500 underline'> click here </button> : null} </p>
          </div>
        ))}
      </div>
      <div className="space-x-4">
        {buttonText1 && <Button variant="cta">{buttonText1}</Button>}
        {buttonText2 && <Button variant="ctaWhiteBlue">{buttonText2}</Button>}
      </div>
    </div>
  )

  const ImageSection = () => (
    <div className={`flex-1 flex flex-col ${isReversed ? 'md:items-start' : 'md:items-end'}`}>
      <div className="w-full max-w-md aspect-square bg-muted rounded-lg overflow-hidden relative">
        <AnimatePresence initial={false}>
          <motion.img
            key={currentImageIndex}
            src={imageSrcs[currentImageIndex] || `/placeholder.svg?height=400&width=400`}
            alt={`Dashboard Screenshot #${currentImageIndex + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {imageSrcs.length > 1 && (
        <div className="flex justify-center w-full max-w-md mt-4 space-x-2">
          {imageSrcs.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentImageIndex ? 'bg-primary' : 'bg-muted-foreground'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )

  return (
    <div className={`flex flex-col md:flex-row items-center w-[90%] min-h-screen bg-background text-foreground ${isReversed ? 'md:flex-row-reverse' : ''}`}>
      <ContentSection />
      <ImageSection />
    </div>
  )
}
