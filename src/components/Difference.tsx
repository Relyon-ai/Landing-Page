import Image from 'next/image';
import React from 'react';

import { Button } from '@/components/ui/button';

interface ImpactComponentProps {
  imageSources?: string[];
}

export default function ImpactComponent({
  imageSources,
}: ImpactComponentProps = {}) {
  return (
    <div className="flex min-h-screen w-full items-center bg-[#F2F5F6] p-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-2 text-sm font-semibold text-gray-500">
          MAKING AN IMPACT
        </h2>
        <h1 className="mb-4 text-4xl font-bold">
          How Relyon in making a difference
        </h1>

        <div className="flex flex-col gap-8 md:flex-row">
          {/* Left column: Text content and button */}
          <div className="flex w-full flex-col justify-between md:w-2/3">
            <div>
              <p className="mb-4">
                At Relyon, our mission extends beyond advanced safety solutions;
                we strive to make a tangible difference in the world. We promote
                various impact projects aligned with our values, especially in
                combating domestic violence. We are dedicated to protecting
                women caught in abuse, partnering with leading organizations to
                provide effective services.
              </p>
              <p className="mb-6">
                Each year, we offer free licenses to eligible nonprofits to
                further our reach and impact. If your organization meets our
                criteria, join us in this crucial mission.
              </p>
            </div>

            <Button variant="cta" className="w-1/2">
              Join us in making a difference &gt;
            </Button>
          </div>

          <div className="w-full md:w-1/3">
            <div className="mb-8 flex justify-between">
              <div className="w-[48%] bg-white p-4 text-center">
                <p className="text-4xl font-bold text-teal-800">600+</p>
                <p className="text-sm text-gray-600">
                  Women in domestic abuse situations
                </p>
              </div>
              <div className="w-[48%] bg-white p-4 text-center">
                <p className="text-4xl font-bold text-teal-800">14</p>
                <p className="text-sm text-gray-600">
                  Real-time assistant cases
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              {[0, 1, 2, 3].map((index) =>
                imageSources && imageSources[index] ? (
                  <Image
                    key={index}
                    src={imageSources[index]}
                    alt={`Logo ${index + 1}`}
                    className="size-16 object-cover"
                  />
                ) : (
                  <div
                    key={index}
                    className="flex size-16 items-center justify-center bg-gray-200"
                  >
                    <span className="text-xs font-bold text-gray-500">
                      LOGO
                    </span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
