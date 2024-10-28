import React from 'react'
import Image from 'next/image'

interface PressSectionProps {
  imageUrls?: string[]
}

export default function InThePress({ imageUrls }: PressSectionProps = {}) {
  const logoCount = 4

  return (
    <section className="w-full bg-gray-100 flex justify-center h-[60vh]" >
      <div className="container flex justify-center items-center" style={{ width: '90%', height: '90%' }}>
        <div>

        <h2 className="text-3xl font-bold text-center" style={{ marginBottom: '5%' }}>In the press</h2>
        <div className="md:grid-cols-4 gap-6 flex items-center justify-center">
          {imageUrls && imageUrls.length > 0
            ? imageUrls.map((url, index) => (
                <div key={index} className="flex items-center justify-center">
                  <Image
                    src={url}
                    alt={`Press image ${index + 1}`}
                    width={200}
                    height={100}
                    className="max-w-full h-auto object-contain"
                    style={{ maxWidth: '50%', maxHeight: '50%' }}
                  />
                </div>
              ))
            : Array.from({ length: logoCount }).map((_, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-center bg-gray-200 p-4 "
                  style={{ width: '200px', height: '100px' }}
                >
                  <span className="text-black text-xl font-bold">LOGO</span>
                </div>
              ))}
        </div>
        </div>
      </div>
    </section>
  )
}

