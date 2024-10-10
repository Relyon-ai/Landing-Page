import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

interface TestimonialsProps {
  image1Src?: string
  image2Src?: string
  image3Src?: string
}

export default function Testimonials({ image1Src, image2Src, image3Src }: TestimonialsProps = {}) {
  const testimonials = [
    { id: 1, src: image1Src },
    { id: 2, src: image2Src },
    { id: 3, src: image3Src },
  ]

  return (
    <div className="flex flex-col justify-center max-w-4xl mx-auto w-[90%] h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">TESTIMONIALS</h2>
      <div className="flex justify-center space-x-4 mb-8">
        <Button variant={"cta"}>Security Companies</Button>
        <Button variant={"ctaWhiteBlue"} className='border-black'>Individuals</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="aspect-square relative">
            {testimonial.src ? (
              <Image
                src={testimonial.src}
                alt={`Testimonial ${testimonial.id}`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 text-lg font-medium">Testimonial # {testimonial.id}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}