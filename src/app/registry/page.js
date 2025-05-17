"use client";

export default function RegistryPage() {
  return (
    <div className="min-h-screen bg-hero-bg bg-cover bg-top bg-no-repeat px-4 py-12 overflow-hidden flex flex-col items-center">
      
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

        <div className="bg-white/90 p-6 rounded-lg flex flex-col justify-between shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">🎁 Gift Registry</h3>
          <p className="text-gray-700 mt-2">
            Browse our registry for household items and experiences.
          </p>
          <a
            href="https://www.myregistry.com/wedding-registry/laura-stoker-and-cliff-villeneuve-langley-bc/4743851/giftlist"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition"
          >
            View Our Registry
          </a>
        </div>

        <div className="bg-white/90 p-6 rounded-lg flex flex-col justify-between shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">🌍 Honeymoon Fund</h3>
          <p className="text-gray-700 mt-2">
            Your presence is the best gift of all! But if you'd like to contribute to our dream honeymoon, we’ve created a fund below. Thank you so much for being part of our special journey!
          </p>

          <form
            action="https://www.paypal.com/donate"
            method="post"
            target="_blank"
            className="w-full mt-4"
          >
            <input type="hidden" name="hosted_button_id" value="MWZ6RFY5QN9U8" />
            <button
              type="submit"
              title="Donate with PayPal"
              className="w-full bg-green-700 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-green-800 transition"
            >
              💖 Contribute via PayPal
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
