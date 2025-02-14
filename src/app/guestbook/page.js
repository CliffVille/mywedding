"use client";

import { useState, useEffect } from "react";

export default function GuestbookPage() {
  const [guestbook, setGuestbook] = useState([]);


  useEffect(() => {
    const storedGuestbook = JSON.parse(localStorage.getItem("guestbook")) || [];
    setGuestbook(storedGuestbook);
  }, []);


  const handleDelete = (index) => {
    const updatedGuestbook = guestbook.filter((_, i) => i !== index);
    
    setGuestbook(updatedGuestbook); 
    localStorage.setItem("guestbook", JSON.stringify(updatedGuestbook)); 
  };

  return (
    <div className="flex flex-col items-center min-h-screen px-4 bg-hero-bg bg-cover bg-no-repeat py-8">
      <h1 className="text-4xl font-display font-bold text-green-700">Guestbook</h1>
      <p className="text-lg text-gray-600 mt-2">See who’s attending!</p>

      {guestbook.length === 0 ? (
        <p className="text-gray-500 mt-4">No RSVPs yet. Be the first to sign the guestbook!</p>
      ) : (
        <div className="mt-6 w-full max-w-2xl bg-white p-6 shadow-lg rounded-md">
          {guestbook.map((entry, index) => (
            <div key={index} className="border-b py-4 flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{entry.name}</h2>
                <p className="text-gray-600">Guests: {entry.guests}</p>
                <p className="text-gray-600">Meal: {entry.meal}</p>
                {entry.message && <p className="italic text-gray-700">"{entry.message}"</p>}
              </div>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
