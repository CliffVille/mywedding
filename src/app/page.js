"use client";

import Countdown from '@/app/components/countdown';

export default function Home() {
  return (
     <div className="relative flex flex-col justify-center items-center text-center text-white h-screen">

      <div className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 w-full h-full opacity-25" />
      </div>  
      
      <div className="absolute md:top top-4 z-10 p-6">
        <h1 className="text-3xl md:text-5xl font-display font-bold drop-shadow-lg">
          Cliff & Laura are Getting Married!
        </h1>
        <p className="text-lg md:text-xl font-body mt-32 opacity-90">
          Join us on November 1st at 3:00 PM
        </p>

        <div className="flex justify-center items-center">
          <Countdown />
        </div>
      </div>
    </div>
  );
}
