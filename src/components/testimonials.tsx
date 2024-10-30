import Image from 'next/image';
import React from 'react';

import { Button } from './ui/button';

interface TestimonialsProps {
  title?: string;
  headline?: string;
  image1Src?: string;
  image2Src?: string;
  image3Src?: string;
  buttons?: boolean;
}

export default function Testimonials({
  title,
  headline,
  image1Src,
  image2Src,
  image3Src,
  buttons = true,
}: TestimonialsProps = {}) {
  const testimonials = [
    { id: 1, src: image1Src },
    { id: 2, src: image2Src },
    { id: 3, src: image3Src },
  ];

  return (
    <div className="mx-auto flex h-screen w-[90%] max-w-4xl flex-col justify-center">
      <h2 className="mb-2 text-center text-xl font-bold">{headline || null}</h2>
      <h2 className="mb-8 text-center text-3xl font-bold">
        {title || 'TESTIMONIALS'}
      </h2>
      {buttons ? (
        <div className="mb-8 flex justify-center space-x-4">
          <Button variant="cta">Security Companies</Button>
          <Button variant="ctaWhiteBlue" className="border-black">
            Individuals
          </Button>
        </div>
      ) : null}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="relative aspect-square">
            {testimonial.src ? (
              <Image
                src={testimonial.src}
                alt={`Testimonial ${testimonial.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="flex size-full items-center justify-center rounded-lg bg-gray-200">
                <span className="text-lg font-medium text-gray-500">
                  Testimonial # {testimonial.id}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
