export default function DetailsPage() {
  return (
    <div className="min-h-screen bg-hero-bg bg-cover bg-top bg-no-repeat py-16 px-6 flex flex-col items-center overflow-auto">
      <h1 className="text-5xl font-display font-bold text-green-900 drop-shadow-md text-center">
        Our Love Story & Wedding Details
      </h1>
      <p className="text-lg text-gray-700 mt-2 italic text-center">
        A journey from friendship to forever
      </p>

      <div className="mt-12 bg-white/80 p-8 rounded-lg shadow-lg max-w-4xl w-full text-center">
        <h2 className="text-3xl font-script text-green-800 mb-4">How It All Began</h2>
        <p className="text-lg text-gray-700 leading-relaxed text-left">
          Cliff & Laura’s journey began online, where an instant connection turned into something truly special. From the very start, they knew this was different—so much so that within a month, they were already saying, “I love you.”

          They jumped headfirst into their relationship, navigating life’s highs and lows together. Through the challenges of grief, including the heartbreaking loss of Cliff’s mom, and the chaos of their busy schedules, their love only grew stronger. No matter what life threw at them, they always found their way back to each other.

          Now, they are ready to say "I do" and celebrate their forever with the people who have supported them along the way.
        </p>
      </div>

      {/* Middle Section Wrapper to control width */}
      <div className="mt-16 w-full max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
              <strong>3:00 PM</strong> - Ceremony <br />
              <strong>3:45 PM</strong> - Cocktail Hour <br />
              <strong>6:00 PM</strong> - Reception & Dinner <br />
              <strong>8:00 PM</strong> - Dancing & Celebration!
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
              - Guests can arrive at 2:30PM <br />
              - Contact us if you have any questions!
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-white/90 p-8 rounded-lg shadow-lg w-full max-w-4xl text-center">
        <h2 className="text-3xl font-script text-green-800 mb-6">🎉 Wedding Party</h2>
        <p className="text-gray-700 mb-10 text-lg">
          Meet the amazing people standing by our side on our big day!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-4">
          {/* Bridesmaids */}
          <div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">👰 Bridesmaids</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="/bridesmaid1.jpg" alt="Bridesmaid 1" className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Samantha</p>
                  <p className="text-gray-600 text-sm">Maid of Honor – Laura's sister and lifelong best friend.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/bridesmaid2.jpg" alt="Bridesmaid 2" className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Emily</p>
                  <p className="text-gray-600 text-sm">Laura’s college roommate and soul sister.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Groomsmen */}
          <div>
            <h3 className="text-2xl font-semibold text-green-900 mb-4">🤵 Groomsmen</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <img src="/groomsman1.jpg" alt="Groomsman 1" className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Jason</p>
                  <p className="text-gray-600 text-sm">Best Man – Cliff’s brother and childhood hero.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <img src="/groomsman2.jpg" alt="Groomsman 2" className="w-20 h-20 rounded-full object-cover shadow-md" />
                <div className="text-left">
                  <p className="font-semibold text-lg">Tyler</p>
                  <p className="text-gray-600 text-sm">Longtime friend and fellow adventurer.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
