"use client";

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-transparent bg-fixed py-16 px-6 flex flex-col items-center">
      
      <h1 className="text-5xl font-display font-bold text-green-900 drop-shadow-md text-center">
        Our Wedding Registry
      </h1>
      <p className="text-lg text-gray-700 mt-2 italic text-center">
        Your love and support are the greatest gifts of all.
      </p>

      <div className="mt-12 bg-white/80 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <p className="text-lg text-gray-700 leading-relaxed">
          We are so grateful to have you as part of our special day! If you'd like to give a gift, we’ve put together a 
          registry with some things to help us start our new life together. More than anything, we appreciate your 
          love and presence at our wedding!
        </p>
      </div>

      <div className="mt-16 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">

        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">🎁 Gift Registry</h3>
          <p className="text-gray-700 mt-2">
            Browse our registry for household items and experiences.
          </p>
          <a
            href="https://www.example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition"
          >
            View Our Registry
          </a>
        </div>

        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">🌍 Honeymoon Fund</h3>
          <p className="text-gray-700 mt-2">
            Help us create unforgettable memories by contributing to our honeymoon.
          </p>
          <a
            href="https://www.example.com/honeymoon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition"
          >
            Contribute to Our Honeymoon
          </a>
        </div>

      </div>
    </div>
  );
}
