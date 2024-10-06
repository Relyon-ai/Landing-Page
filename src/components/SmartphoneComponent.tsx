import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

import pic2 from '../../public/assets/images/phone-images/iPhone 15.png';
import pic1 from '../../public/assets/images/phone-images/iPhone 17 (1).png';

interface ValueProp {
  title: string;
  description: string;
}

interface SecurityAppProps {
  direction: boolean;
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
  onSecondaryClick,
}: SecurityAppProps) {
  const imageContent = (
    <div className="relative h-[400px] w-full bg-[#F2F5F6] md:h-[500px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-[400px] w-[200px] md:h-[500px] md:w-[250px]">
          <Image
            src={pic1.src}
            alt="Security App Interface"
            layout="fill"
            objectFit="contain"
            className="z-10"
          />
        </div>
        <div className="relative -ml-20 mt-10 h-[400px] w-[200px] md:h-[500px] md:w-[250px]">
          <Image
            src={pic2.src}
            alt="Security App Map View"
            layout="fill"
            objectFit="contain"
            className="z-0"
          />
        </div>
      </div>
    </div>
  );

  const textContent = direction ? (
    <div className="flex flex-col justify-center bg-[#F2F5F6]">
      <h2 className="mb-2 text-sm font-semibold text-gray-500">
        INDIVIDUALS & FAMILIES
      </h2>
      <h1 className="mb-6 text-4xl font-bold">Stay safe. Stay connected.</h1>
      {valueProps && (
        <div className="mb-6 space-y-4">
          {valueProps.map((prop) => (
            <div key={prop.title}>
              {' '}
              {/* Use a unique identifier */}
              <h3 className="font-semibold">{prop.title}</h3>
              <p className="text-gray-600">{prop.description}</p>
            </div>
          ))}
        </div>
      )}
      <Button onClick={onPrimaryClick} className="w-fit bg-teal-600 text-white">
        {primaryButtonText}
      </Button>
    </div>
  ) : (
    <div className="flex flex-col justify-center bg-[#F2F5F6]">
      <h1 className="mb-6 text-4xl font-bold">
        On-demand security services for your members
      </h1>
      <p className="mb-6 text-gray-600">
        Description of what the experience is like for the end user. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex space-x-4">
        <Button onClick={onPrimaryClick} className="bg-teal-600 text-white">
          {primaryButtonText}
        </Button>
        {secondaryButtonText && onSecondaryClick && (
          <Button variant="outline" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </Button>
        )}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col items-center gap-8 bg-[#F2F5F6] p-8 md:flex-row">
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
  );
}
