// src/sections/About.jsx
export default function About() {
  return (
    <section className="bg-white py-20 px-6" id="about">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* === TEXT SIDE === */}
        <div>
          <h2 className="text-4xl font-bold text-green-800 mb-4">About LandCo Kenya</h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            LandCo Kenya is a trusted real estate company dedicated to helping Kenyans
            own genuine land across the country. With a proven track record in property
            development and title processing, we guarantee secure investments and
            customer satisfaction.
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Our team is passionate about transforming land ownership by offering
            transparent processes, flexible payment plans, and full post-purchase
            support. We believe every Kenyan deserves to own land with peace of mind.
          </p>
          <a
            href="/properties"
            className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
          >
            Explore Properties
          </a>
        </div>

        {/* === IMAGE SIDE === */}
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80"
            alt="Aerial view of Kenyan real estate land"
            className="rounded-2xl shadow-lg object-cover h-[420px] w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-green-900/10 to-transparent rounded-2xl"></div>
        </div>
      </div>
    </section>
  );
}

