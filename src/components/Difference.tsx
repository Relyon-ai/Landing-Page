import React from 'react'
import { Button } from "@/components/ui/button"

interface ImpactComponentProps {
  imageSources?: string[]
}

export default function ImpactComponent({ imageSources }: ImpactComponentProps = {}) {
  return (
    <div className="min-h-screen w-full bg-[#F2F5F6] p-8 flex items-center">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-sm font-semibold text-gray-500 mb-2">MAKING AN IMPACT</h2>
        <h1 className="text-4xl font-bold mb-4">How Relyon in making a difference</h1>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left column: Text content and button */}
          <div className="w-full md:w-2/3 flex flex-col justify-between">
            <div>
              <p className="mb-4">
                At Relyon, our mission extends beyond advanced safety solutions; we strive to make a tangible difference in the
                world. We promote various impact projects aligned with our values, especially in combating domestic violence.
                We are dedicated to protecting women caught in abuse, partnering with leading organizations to provide effective
                services.
              </p>
              <p className="mb-6">
                Each year, we offer free licenses to eligible nonprofits to further our reach and impact. If your organization meets
                our criteria, join us in this crucial mission.
              </p>
            </div>
            
            <Button variant={"cta"} className='w-[50%]'>
              Join us in making a difference &gt;
            </Button>
          </div>
          
          <div className="w-full md:w-1/3">
            <div className="flex justify-between mb-8">
              <div className="bg-white p-4 w-[48%] text-center">
                <p className="text-4xl font-bold text-teal-800">600+</p>
                <p className="text-sm text-gray-600">Women in domestic abuse situations</p>
              </div>
              <div className="bg-white p-4 w-[48%] text-center">
                <p className="text-4xl font-bold text-teal-800">14</p>
                <p className="text-sm text-gray-600">Real-time assistant cases</p>
              </div>
            </div>
            
            <div className="flex justify-between">
              {[0, 1, 2, 3].map((index) => (
                imageSources && imageSources[index] ? (
                  <img 
                    key={index}
                    src={imageSources[index]}
                    alt={`Logo ${index + 1}`}
                    className="w-16 h-16 object-cover"
                  />
                ) : (
                  <div key={index} className="bg-gray-200 w-16 h-16 flex items-center justify-center">
                    <span className="text-gray-500 font-bold text-xs">LOGO</span>
                  </div>
                )
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}