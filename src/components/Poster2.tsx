import Bluepostericon from '@/public/assets/icons/blue-poster-icon'
import React from 'react'

export default function Poster2() {
  return (
    <section className="bg-[#1f606c] text-white h-screen flex justify-center items-center">
      <div className="container mx-auto px-4 py-12 md:py-24 lg:py-32 flex flex-col lg:flex-row justify-between items-center w-[90%]">
        <div className="lg:w-1/2 ">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Making the world a safer place.
          </h1>
          <p className="mb-4">
            At Relyon... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. U
          </p>
        </div>
        <div className="h-[80vh] nr-0 pr-0 ">
          <Bluepostericon/>
        </div>
      </div>
    </section>
  )
}