import { Phone, MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section
      className="relative text-white py-24 px-6 text-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 64, 0, 0.7), rgba(0, 64, 0, 0.7)), url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1500&q=80')",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
          Own a Piece of Kenya’s Future, Today
        </h2>
        <p className="text-lg md:text-xl text-green-100 mb-10 max-w-2xl mx-auto">
          Secure your investment with LandCo Kenya — genuine titles, flexible payment
          plans, and prime plots across the country. Let’s help you start your
          land ownership journey.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/contact"
            className="bg-white text-green-800 font-semibold px-10 py-3 rounded-lg hover:bg-green-100 transition-colors shadow-md"
          >
            <span className="inline-flex items-center gap-2">
              <Phone size={18} /> Contact Us
            </span>
          </a>
          <a
            href="/properties"
            className="border-2 border-white text-white font-semibold px-10 py-3 rounded-lg hover:bg-white hover:text-green-800 transition-colors"
          >
            View Available Properties
          </a>
        </div>
      </div>

      {/* === WhatsApp Floating Button === */}
      <a
        href="https://wa.me/254712345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </section>
  );
}
