import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat min-h-[90vh] flex items-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1560185127-6ed189bf04bb')",

          
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          Own Genuine Land in <span className="text-green-400">Kenya</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 mb-8 max-w-2xl mx-auto">
          Discover affordable and verified land across Nairobi, Nanyuki, and
          Naivasha — all with ready title deeds.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/properties"
            className="bg-green-700 hover:bg-green-800 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            View Properties
          </Link>
          <Link
            to="/contact"
            className="bg-white text-green-700 hover:bg-green-100 px-6 py-3 rounded-lg font-medium transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Decorative Bottom Curve (optional aesthetic) */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-[0] rotate-180">
        <svg
          className="relative block w-[calc(200%+1.3px)] h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39 56.44C180.44 86.64 58.39 125.75 0 150V0h1200v27.35c-80.39 37.95-221.39 94.55-360 70.14-140.61-24.81-263.56-114.46-518.61-40.88z"
            fill="#ffffff"
          ></path>
        </svg>
      </div>
    </section>
  );
}
