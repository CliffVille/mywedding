"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const images = [
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
  "/background.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-hero-bg bg-cover bg-top bg-no-repeat px-4 py-12 overflow-hidden">
      
      <h1 className="text-5xl font-display font-bold text-green-800 drop-shadow-md">Our Journey in Pictures</h1>
      <p className="text-lg text-gray-700 mt-2 italic">A glimpse into our love story</p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
            onClick={() => setSelectedImage(src)}
          >
            <Image
              src={src}
              alt={`Gallery image ${index + 1}`}
              width={400}
              height={300}
              className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          className="fixed inset-0 flex justify-center items-center bg-black/80 backdrop-blur-md"
          ariaHideApp={false}
        >
          <div className="relative p-4">
            <button
              className="absolute top-2 right-2 bg-white/90 text-black px-3 py-2 rounded-full text-lg font-bold shadow-md hover:bg-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={900}
              height={600}
              className="rounded-lg shadow-xl"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
