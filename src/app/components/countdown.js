"use client";

import { useState, useEffect } from "react";

const CountdownTimer = () => {
  const weddingDate = new Date("2025-11-01T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(null); 

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    setTimeLeft(getTimeLeft()); 

    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft === null) return null;

  return (
    <div className="text-white px-6 py-4 rounded-md text-lg flex space-x-4">
      <div className="text-center">
        <span className="text-2xl font-bold">{timeLeft.days}</span>
        <p className="text-sm">Days</p>
      </div>
      <div className="text-center">
        <span className="text-2xl font-bold">{timeLeft.hours}</span>
        <p className="text-sm">Hours</p>
      </div>
      <div className="text-center">
        <span className="text-2xl font-bold">{timeLeft.minutes}</span>
        <p className="text-sm">Minutes</p>
      </div>
      <div className="text-center">
        <span className="text-2xl font-bold">{timeLeft.seconds}</span>
        <p className="text-sm">Seconds</p>
      </div>
    </div>
  );
};

export default CountdownTimer;
