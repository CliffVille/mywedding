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
              - Contact us if you have any questions! <br />
              - Hotel block available at <br />
              <a
                href="https://www.poco-inn-and-suites.com"
                className="text-green-600 underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                www.poco-inn-and-suites.com
              </a>{" "} <br />
              (mention our wedding code <strong>stokerville2025</strong> for a discount)
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
            <h3 className="text-2xl font-semibold text-center md:text-left text-green-900 mb-4">👰 Bridesmaids</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">   
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Michelle Stoker-Mace</p>
                  <p className="text-gray-600 text-sm">Maid of Honor – Laura's sister and lifelong partner in crime.
                  Michelle has been by Laura’s side since day one—sister, best friend, and the one who always has her back.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Megan Marie</p>
                  <p className="text-gray-600 text-sm">Laura’s soul sister and lifelong best friend.
                  From childhood memories to adult milestones, Megan and Laura have shared it all. Their bond is unbreakable.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Kristin Maki</p>
                  <p className="text-gray-600 text-sm">Baseball sister, confidant, and one of Laura’s best friends.
                  Kristin is the kind of friend who shows up, listens, and makes every moment more fun—on and off the field.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Jamiee Jansen</p>
                  <p className="text-gray-600 text-sm">Cousin, confidant, and a true ride-or-die.
                  Jamiee and Laura have been through everything together—laughs, tears, and everything in between. Their connection runs deep.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Groomsmen */}
          <div>
            <h3 className="text-2xl font-semibold text-center md:text-left text-green-900 mb-4">🤵 Groomsmen</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Max Lantain</p>
                  <p className="text-gray-600 text-sm">Best Man – Childhood friend, trusted confidant, and brother.
                  Max has been a constant presence in the groom’s life—loyal, dependable, and always up for an adventure.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Terril Cowan</p>
                  <p className="text-gray-600 text-sm">Brother in Christ and lifelong partner in crime.
                  Terril brings wisdom, laughs, and unwavering support—he’s family in every way that matters.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Mike Sarrazin</p>
                  <p className="text-gray-600 text-sm">Childhood best friend and all-around solid guy.
                  Mike’s been part of cliff's story from the beginning, a steady and loyal presence throughout the years.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Fabian Villeneuve</p>
                  <p className="text-gray-600 text-sm">College brother and former roommate with legendary status.
                  From wild stories to tight bonds, Fabian is more than a friend—he’s part of the family.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Lindsay Brittain</p>
                  <p className="text-gray-600 text-sm">College friend, wilderness wingman, and loyal brother.
                  Lindsay’s the guy you want in your corner—or stranded in the woods with. Rugged, reliable, and real.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="text-center md:text-left">
                  <p className="font-semibold text-lg">Justin Wenzel</p>
                  <p className="text-gray-600 text-sm">Best BC roommate and genuine friend.
                  Justin brought laughter, late-night talks, and a sense of home—he’s a true brother in every sense.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
