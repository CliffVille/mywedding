"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Rsvp() {
  const [formData, setFormData] = useState({
    name: "",
    guests: "",
    meal: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const storedGuestbook = JSON.parse(localStorage.getItem("guestbook")) || [];
    localStorage.setItem("guestbook", JSON.stringify(storedGuestbook));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.guests || !formData.meal) {
      alert("Please fill out all required fields.");
      return;
    }

    const guestbookEntries = JSON.parse(localStorage.getItem("guestbook")) || [];

    const newEntry = {
      name: formData.name,
      guests:formData.guests,
      meal: formData.meal,
      message: formData.message || "No message",
    };

    const updatedGuestbook = [...guestbookEntries, newEntry];

    localStorage.setItem("guestbook", JSON.stringify(updatedGuestbook));

    setSubmitted(true);

    setTimeout(() => {
      router.push("/guestbook");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-hero-bg bg-cover bg-center bg-no-repeat p-6">
      <h1 className="text-4xl font-display font-bold text-green-700">RSVP for Cliff & Laura’s Wedding</h1>
      <p className="text-lg text-gray-600 mt-2">We can't wait to celebrate with you! Please let us know if you'll be attending.</p>

      {submitted ? (
        <div className="mt-8 bg-green-100 text-green-800 p-4 rounded-md shadow-md">
          <p className="text-xl font-semibold">Thank you for your RSVP!</p>
          <p>We look forward to celebrating with you!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 shadow-lg rounded-md w-full max-w-md">
       
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Number of Guests</label>
            <input
              type="number"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Enter number of guests"
              min="1"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Meal Preference</label>
            <select
              name="meal"
              value={formData.meal}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select a meal</option>
              <option value="Chicken">Chicken</option>
              <option value="Beef">Beef</option>
              <option value="Vegetarian">Vegetarian</option>
              <option value="Vegan">Vegan</option>
            </select>
          </div>
   
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Leave a message for the couple"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
          >
            Submit RSVP
          </button>
        </form>
      )}
    </div>
  );
}
