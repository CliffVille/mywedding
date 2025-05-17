"use client";

import { useState } from "react";

export default function RsvpPage() {
  const [formData, setFormData] = useState({
    attending: "",
    totalGuests: "",
    names: "",
    songRequests: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.attending || !formData.totalGuests || !formData.names) {
      alert("Please fill out all required fields.");
      return;
    }

    const newEntry = {
      attending: formData.attending,
      totalGuests: formData.totalGuests,
      names: formData.names.split('\n').map(name => name.trim()),
      songRequests: formData.songRequests || "No song requests",
      message: formData.message || "No message",
    };

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEntry),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting RSVP:", err);
      alert("Network error submitting RSVP.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-hero-bg bg-cover bg-center bg-no-repeat p-6">
      <h1 className="text-4xl font-display font-bold text-green-700">RSVP for Cliff & Laura’s Wedding</h1>
      <p className="text-lg text-gray-600 mt-2">We can't wait to celebrate with you! Please let us know if you'll be attending.</p>

      {submitted ? (
        <div className="mt-8 bg-green-100 text-green-800 p-6 rounded-lg shadow-md animate-fade-in">
          <p className="text-xl font-semibold mb-2">🎉 Thank you for your RSVP!</p>
          <p>We’re so excited to celebrate with you!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 bg-white p-6 shadow-lg rounded-md w-full max-w-md space-y-4">
          <div>
            <label className="block text-gray-700 font-medium mb-1">Will you be attending?</label>
            <select
              name="attending"
              value={formData.attending}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              required
            >
              <option value="">Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Total Number of Guests</label>
            <input
              type="number"
              name="totalGuests"
              value={formData.totalGuests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Enter total guests attending"
              min="1"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Guest Names(First & Last)</label>
            <textarea
              name="names"
              value={formData.names}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Enter each name on a new line"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-1">Song Requests (Optional)</label>
            <textarea
              name="songRequests"
              value={formData.songRequests}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500"
              placeholder="Enter song requests"
            />
          </div>

          <div>
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
