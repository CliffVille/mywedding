"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";

const images = [
  "/LC1.jpg",
  "/LC2.jpg",
  "/LC3.jpg",
  "/LC6.jpg",
  "/LC7.jpg",
  "/LC9.jpg",
  "/LC10.jpg",
  "/LC11.jpg",
  "/LC12.jpg",
  "/LC13.jpg",
  "/LC14.jpg",
  "/LC15.jpg",
];

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center bg-hero-bg bg-cover bg-top bg-no-repeat px-4 py-12 overflow-hidden">
      
      <h1 className="text-5xl text-center font-display font-bold text-green-800 drop-shadow-md">Our Journey in Pictures</h1>
      <p className="text-lg text-gray-700 mt-2 italic">A glimpse into our love story</p>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-lg"
            onClick={() => src && setSelectedImage(src)}
          >
            {src ? (
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                width={200}
                height={100}
                className="rounded-2xl object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            ) : (
              <svg
                width="200"
                height="100"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
                stroke="black"
                fill="none"
                strokeWidth="8"
                className="rounded-2xl bg-transparent object-cover transition-transform duration-300 group-hover:scale-105"
              >
                <rect x="10" y="10" width="180" height="180" />
                <path d="M40 40L160 160M160 40L40 160" />
              </svg>
            )}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        ))}
      </div>

      {/* Modal for selected images */}
      {selectedImage && (
        <Modal
          isOpen={!!selectedImage}
          onRequestClose={() => setSelectedImage(null)}
          contentLabel="Image Modal"
          overlayClassName="absolute inset-0 bg-black/80 backdrop-blur-md flex justify-center z-50"
          className="relative bg-transparent outline-none p-4"
          ariaHideApp={false}
        >
          <div className="relative p-4">
            <button
              className="absolute top-5 right-5 bg-white/90 text-black px-3 py-2 rounded-2xl text-lg font-bold shadow-md hover:bg-gray-300 transition"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            <Image
              src={selectedImage}
              alt="Selected"
              width={400}
              height={400}
              className="rounded-lg shadow-xl"
            />
          </div>
        </Modal>
      )}
    </div>
  );
}
