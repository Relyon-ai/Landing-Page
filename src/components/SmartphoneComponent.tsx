import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import pic2 from '../../public/assets/images/phone-images/iPhone 15.png';
import pic1 from '../../public/assets/images/phone-images/iPhone 17 (1).png';

interface ValueProp {
  title?: string;
  description?: string;
}

interface SecurityAppProps {
  direction: boolean; // true for image on left, false for image on right
  valueProps?: ValueProp[];
  primaryButtonText: string;
  secondaryButtonText?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SecurityApp({
  direction,
  valueProps,
  primaryButtonText,
  secondaryButtonText,
  onPrimaryClick,
  onSecondaryClick
}: SecurityAppProps) {
  const imageContent = (
    <div className="relative w-full md:h-[500px]">
      <div className="absolute inset-0 flex justify-center items-center">
        {direction ? (
          <>
            <div className="relative w-[180px] h-[360px] md:w-[225px] md:h-[450px] z-0 -mr-16 mt-8">
              <Image
                src={direction ? pic2.src : pic1.src}
                alt="Security App Map View"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-[220px] h-[440px] md:w-[275px] md:h-[550px] z-10">
              <Image
                src={direction ? pic1.src : pic2.src}
                alt="Security App Interface"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </>
        ) : (
          <>
            <div className="relative w-[220px] h-[440px] md:w-[275px] md:h-[550px] z-10">
              <Image
                src={pic1.src}
                alt="Security App Map View"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative w-[180px] h-[360px] md:w-[225px] md:h-[450px] z-0 -ml-16 mt-8">
              <Image
                src={pic2.src}
                alt="Security App Interface"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </>
        )}
      </div>
    </div>
  )

  const textContent = direction ? (
    <div className="flex flex-col justify-center">
      <h2 className="text-sm font-semibold text-gray-500 mb-2">INDIVIDUALS & FAMILIES</h2>
      <h1 className="text-4xl font-bold mb-6">Stay safe. Stay connected.</h1>
      {valueProps && (
        <div className="space-y-4 mb-6">
          {valueProps.map((prop, index) => (
            <div key={index}>
              <h3 className="font-semibold">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
      <div >
      <Button variant={"cta"} onClick={onPrimaryClick} >
        {primaryButtonText}
      </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center">
      <h1 className="text-4xl font-bold mb-6">On-demand security services for your members</h1>
      <p className="mb-6 text-gray-600">
        Description of what the experience is like for the end user. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex space-x-4">
        <Button onClick={onPrimaryClick} variant="cta">
          {primaryButtonText}
        </Button>
        {secondaryButtonText && onSecondaryClick && (
          <div>

          <Button variant="ctaWhite" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </Button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <div className="w-full h-screen bg-[#F2F5F6]">
  <div className="w-[90%] mx-auto flex flex-col md:flex-row items-center h-full">
    {direction ? (
      <>
        <div className="w-full md:w-1/2">{imageContent}</div>
        <div className="w-full md:w-1/2">{textContent}</div>
      </>
    ) : (
      <>
        <div className="w-full md:w-1/2">{textContent}</div>
        <div className="w-full md:w-1/2">{imageContent}</div>
      </>
    )}
  </div>
</div>
  )
}