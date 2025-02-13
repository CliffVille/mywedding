"use client";

import Countdown from '@/app/components/countdown';

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center items-center text-center text-white min-h-screen">

      <div className="absolute inset-0 bg-hero-bg bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 w-full h-full opacity-25" />
      </div>  
      
      <div className="relative z-10 p-6">
        <h1 className="text-5xl font-display font-bold drop-shadow-lg">
          Cliff & Laura Are Getting Married!
        </h1>
        <p className="text-xl font-body mt-4 opacity-90">
          Join us on November 1st at 3:00 PM
        </p>

        <div className="flex justify-center items-center mt-6">
          <Countdown />
        </div>
      </div>
    </div>
  );
}
