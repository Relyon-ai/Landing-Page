'use client';

import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Button } from './ui/button';

interface ValueProp {
  title: string;
  description: string;
}

interface SecurityServicesProps {
  headline?: string;
  title: string;
  valueProps?: ValueProp[];
  buttonText1?: string;
  buttonText2?: string;
  imageSrcs?: string[];
  isReversed?: boolean;
  textSizeColor?: string[];
  clickHere?: boolean;
  isGray?: boolean;
}

export default function SecurityServices({
  headline,
  title,
  valueProps,
  buttonText1,
  buttonText2,
  imageSrcs = [],
  isReversed = false,
  textSizeColor = ['sm', 'muted-foreground'],
  clickHere = false,
  isGray = false,
}: SecurityServicesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const ContentSection = () => (
    <div className={`flex-1  ${isReversed ? 'md:pl-8' : 'md:pr-8'}`}>
      <h2 className="mb-2 text-sm font-semibold uppercase">{headline}</h2>
      <h1 className="mb-6 text-3xl font-bold">{title}</h1>
      <div className="mb-8 space-y-4">
        {valueProps?.map((prop, index) => (
          <div key={uuidv4()}>
            <h3 className="font-semibold">{prop.title}</h3>
            <p className={`${textSizeColor[0]} ${textSizeColor[1]}`}>
              {prop.description}{' '}
              {index === valueProps.length - 1 && clickHere ? (
                <button type="button" className="text-teal-500 underline">
                  {' '}
                  click here{' '}
                </button>
              ) : null}{' '}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4 md:block">
        {buttonText1 && <Button variant="cta">{buttonText1}</Button>}
        {buttonText2 && <Button variant="ctaWhiteBlue">{buttonText2}</Button>}
      </div>
    </div>
  );

  const ImageSection = () => (
    <div
      className={`flex flex-1 flex-col ${isReversed ? 'md:items-start' : 'md:items-end'}`}
    >
      <div className="relative aspect-square w-full max-w-md overflow-hidden rounded-lg bg-muted">
        <AnimatePresence initial={false}>
          <motion.img
            key={uuidv4()}
            src={
              imageSrcs[currentImageIndex] ||
              `/placeholder.svg?height=400&width=400`
            }
            alt={`Dashboard Screenshot #${currentImageIndex + 1}`}
            className="absolute inset-0 size-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {imageSrcs.length > 1 && (
        <div className="mt-4 flex w-full max-w-md justify-center space-x-2">
          {imageSrcs.map((_, index) => (
            <button
              key={uuidv4()}
              type="button"
              className={`size-3 rounded-full ${
                index === currentImageIndex
                  ? 'bg-primary'
                  : 'bg-muted-foreground'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`View image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );

  return (
    
    <div
      className={`flex my-[10%] lg:my-0 lg:min-h-screen w-[90%] py-4 md:py-0 flex-col-reverse items-center justify-center md:flex-row ${isGray ? 'bg-[#f2f5f6]' : 'bg-background'} text-foreground ${isReversed ? 'flex-col-reverse md:flex-row-reverse' : ''}`}
    >
      <ContentSection />
      <ImageSection />
    </div> 




  );
}
