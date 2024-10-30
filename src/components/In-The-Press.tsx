import Image from 'next/image';
import React from 'react';
import { v4 as uuidv4 } from 'uuid';

interface PressSectionProps {
  imageUrls?: string[];
  bgColor?: string;
  title?: string;
}

export default function InThePress({
  imageUrls,
  bgColor,
  title,
}: PressSectionProps = {}) {
  const logoCount = 4;

  return (
    <section
      className={`w-full ${bgColor ? `${bgColor}` : 'bg-gray-100'}  flex h-[60vh] justify-center`}
    >
      <div
        className="container flex items-center justify-center"
        style={{ width: '90%', height: '90%' }}
      >
        <div>
          <h2
            className="text-center text-3xl font-bold"
            style={{ marginBottom: '5%' }}
          >
            {title || 'In the press'}
          </h2>
          <div className="flex items-center justify-center gap-6 md:grid-cols-4">
            {imageUrls && imageUrls.length > 0
              ? imageUrls.map((url, index) => (
                  <div
                    key={uuidv4()}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={url}
                      alt={`Press image ${index + 1}`}
                      width={200}
                      height={100}
                      className="h-auto max-w-full object-contain"
                      style={{ maxWidth: '50%', maxHeight: '50%' }}
                    />
                  </div>
                ))
              : Array.from({ length: logoCount }).map((_) => (
                  <div
                    key={uuidv4()}
                    className="flex items-center justify-center bg-gray-200 p-4 "
                    style={{ width: '200px', height: '100px' }}
                  >
                    <span className="text-xl font-bold text-black">LOGO</span>
                  </div>
                ))}
          </div>
        </div>
      </div>
    </section>
  );
}
