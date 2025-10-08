import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          Contact LandCo Kenya
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Reach out to us for inquiries, site visits, or property consultations.
          We’re ready to help you find genuine land anywhere in Kenya.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md p-8">
        {/* === Left Side: Contact Info === */}
        <div className="flex flex-col justify-center text-left space-y-6">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Get in Touch
          </h2>
          <div className="flex items-start gap-3">
            <Phone className="text-green-700" />
            <p className="text-gray-700">+254 712 345 678</p>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="text-green-700" />
            <p className="text-gray-700">info@landco.co.ke</p>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="text-green-700" />
            <p className="text-gray-700">
              LandCo Offices, 2nd Floor, ABC Plaza, Nairobi
            </p>
          </div>
          <a
            href="https://wa.me/254712345678"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-700 text-white px-5 py-3 rounded-lg hover:bg-green-800 transition-colors mt-4 w-fit"
          >
            <Phone size={18} />
            Chat on WhatsApp
          </a>
        </div>

        {/* === Right Side: Contact Form === */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="space-y-6 text-left"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">
            Send Us a Message
          </h2>

          <div>
            <label className="block text-gray-700 mb-2">Full Name</label>
            <input
              type="text"
              placeholder="John Mwangi"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 mb-2">Message</label>
            <textarea
              rows="4"
              placeholder="Write your inquiry here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-green-700 outline-none"
              required
            />
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-800 transition-colors w-full md:w-auto"
          >
            <Send size={18} />
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
