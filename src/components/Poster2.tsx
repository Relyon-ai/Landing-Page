import React from 'react';

import Bluepostericon from '@/public/assets/icons/blue-poster-icon';

export default function Poster2() {
  return (
    <section className="flex h-screen items-center justify-center bg-[#1f606c] text-white">
      <div className="container mx-auto flex w-[90%] flex-col items-center justify-between px-4 py-12 md:py-24 lg:flex-row lg:py-32">
        <div className="lg:w-1/2 ">
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            Making the world a safer place.
          </h1>
          <p className="mb-4">
            At Relyon... Lorem ipsum dolor sit amet, consectetur adipiscing
            elit, sed do eiusmod tempor incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. U
          </p>
        </div>
        <div className="nr-0 h-[80vh] pr-0 ">
          <Bluepostericon />
        </div>
      </div>
    </section>
  );
}
