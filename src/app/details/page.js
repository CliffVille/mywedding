"use client";

export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-hero-bg bg-cover bg-top bg-no-repeat py-16 px-6 flex flex-col items-center overflow-auto">
  
      <h1 className="text-5xl font-display font-bold text-green-900 drop-shadow-md text-center">
        Our Love Story & Wedding Details
      </h1>
      <p className="text-lg text-gray-700 mt-2 italic text-center">
        A journey from friendship to forever
      </p>

      <div className="mt-12 bg-white/80 p-8 rounded-lg shadow-lg max-w-3xl text-center">
        <h2 className="text-3xl font-script text-green-800 mb-4">How It All Began</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-left">
        Cliff & Laura’s journey began online, where an instant connection turned into something truly special. From the very start, they knew this was different—so much so that within a month, they were already saying, “I love you.”

        They jumped headfirst into their relationship, navigating life’s highs and lows together. Through the challenges of grief, including the heartbreaking loss of Cliff’s mom, and the chaos of their busy schedules, their love only grew stronger. No matter what life threw at them, they always found their way back to each other.

        Now, they are ready to say "I do" and celebrate their forever with the people who have supported them along the way.


        </p>
      </div>

      <div className="mt-16 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-2xl font-semibold text-green-900">📍 Venue</h3>
            <p className="text-gray-700 mt-2">
                Golden Eagle Golf Club <br />
                21770 Ladner Rd, Maple Ridge, BC
            </p>  
            <div className="mt-4">
                <iframe
                className="w-full h-64 md:h-72 rounded-lg"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2602.120719762361!2d-122.61903052401166!3d49.29305627002018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54842a97d7d4cb89%3A0x69fde09734749ef3!2sGolden%20Eagle%20Golf%20Club!5e0!3m2!1sen!2sca!4v1739422121492!5m2!1sen!2sca"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>


        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center flex flex-col justify-around items-center">
          <h3 className="text-2xl font-semibold text-green-900">⏰ Schedule</h3>
          <p className="text-gray-700 mt-2">
            **3:00 PM** - Ceremony <br />
            **4:30 PM** - Cocktail Hour <br />
            **6:00 PM** - Reception & Dinner <br />
            **9:00 PM** - Dancing & Celebration!
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">👗 Dress Code</h3>
          <p className="text-gray-700 mt-2">
            Elegant & Formal Attire <br />
            (Think romantic, flowy, & classy!)
          </p>
        </div>

        <div className="bg-white/90 p-6 rounded-lg shadow-md text-center">
          <h3 className="text-2xl font-semibold text-green-900">✨ Additional Info</h3>
          <p className="text-gray-700 mt-2">
            - Parking available on-site <br />
            - Please arrive at least **15 minutes early** <br />
            - Contact us if you have any questions!
          </p>
        </div>
      </div>
    </div>
  );
}
