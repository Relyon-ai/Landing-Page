import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

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
  title?: string; 
  isGray? : boolean;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function SecurityApp({
  direction,
  valueProps,
  primaryButtonText,
  secondaryButtonText,
  title,
  isGray,
  onPrimaryClick,
  onSecondaryClick,
}: SecurityAppProps) {
  const imageContent = (
    <div className="relative w-full md:h-[500px]">
      <div className="lg:absolute inset-0 flex items-center justify-center">
        {direction ? (
          <>
            <div className="relative z-0 -mr-16 mt-8 h-[360px] w-[180px] md:h-[450px] md:w-[225px]">
              <Image
                src={direction ? pic2.src : pic1.src}
                alt="Security App Map View"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative z-10 h-[440px] w-[220px] md:h-[550px] md:w-[275px]">
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
            <div className="relative z-10 h-[440px] w-[220px] md:h-[550px] md:w-[275px]">
              <Image
                src={pic1.src}
                alt="Security App Map View"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="relative z-0 -ml-16 mt-8 h-[360px] w-[180px] md:h-[450px] md:w-[225px]">
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
  );

  const textContent = direction ? (
    <div className="flex flex-col justify-center">
      <h2 className="mb-2 text-sm font-semibold text-gray-500">
        INDIVIDUALS & FAMILIES
      </h2>
      <h1 className="mb-6 text-4xl font-bold">Stay safe. Stay connected.</h1>
      {valueProps && (
        <div className="mb-6 space-y-4">
          {valueProps.map((prop) => (
            <div key={uuidv4()}>
              <h3 className="font-semibold">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
      <div>
        <Button variant="cta" onClick={onPrimaryClick}>
          {primaryButtonText}
        </Button>
      </div>
    </div>
  ) : (
    <div className="flex flex-col justify-center">
      <h1 className="mb-6 text-4xl font-bold">
        {title ? title : "On-demand security services for your members"}
      </h1>
      <p className="mb-6 text-gray-600">
        Description of what the experience is like for the end user. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex space-x-4">
        <Button onClick={onPrimaryClick} variant="cta">
          {primaryButtonText}
        </Button>
        {secondaryButtonText && (
          <div>
            <Button variant="ctaWhiteBlue" onClick={onSecondaryClick}>
              {secondaryButtonText}
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className={`my-[10%] lg:my-0 py-[10%] lg:py-0 lg:h-screen w-full ${isGray ? "bg-[#F2F5F6]" : "bg-white"} `}>
      <div className="mx-auto flex h-full w-[90%] flex-col items-center lg:flex-row gap-y-[6%] lg:gap-y-0 lg:gap-x-[20%]">
        {direction ? (
          <>
            <div className="w-full lg:w-1/2">{imageContent}</div>
            <div className="w-full lg:w-1/2">{textContent}</div>
          </>
        ) : (
          <>
            <div className="w-full lg:w-1/2">{textContent}</div>
            <div className="w-full lg:w-1/2">{imageContent}</div>
          </>
        )}
      </div>
    </div>
  );
}
