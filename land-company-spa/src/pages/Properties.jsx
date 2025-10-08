import { useState } from "react";
import { MapPin, Home, Phone } from "lucide-react";
import { propertiesData } from "../data/propertiesData";

export default function Properties() {
  const [selectedCounty, setSelectedCounty] = useState("All");

  // Filter by county
  const filtered = selectedCounty === "All"
    ? propertiesData
    : propertiesData.filter((p) => p.county === selectedCounty);

  // Extract all unique counties for the dropdown
  const counties = ["All", ...new Set(propertiesData.map((p) => p.county))];

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* === Page Header === */}
        <h1 className="text-4xl font-bold text-green-800 text-center mb-4">
          Explore Our Properties
        </h1>
        <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          Browse through our curated list of genuine and affordable land across Kenya.
        </p>

        {/* === Filter Dropdown === */}
        <div className="flex justify-center mb-8">
          <select
            value={selectedCounty}
            onChange={(e) => setSelectedCounty(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-700"
          >
            {counties.map((county) => (
              <option key={county} value={county}>
                {county}
              </option>
            ))}
          </select>
        </div>

        {/* === Properties Grid === */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filtered.map((property) => (
            <div
              key={property.id}
              className="bg-white border rounded-2xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-left">
                <h2 className="text-xl font-semibold text-green-700 mb-1">
                  {property.title}
                </h2>
                <p className="flex items-center text-gray-600 text-sm mb-2">
                  <MapPin size={16} className="mr-1 text-green-600" />
                  {property.location}
                </p>
                <p className="text-gray-800 font-medium mb-4">
                  {property.price}
                </p>
                <a
                  href={`https://wa.me/254712345678?text=Hi, I'm interested in ${property.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-800 transition-colors"
                >
                  <Phone size={16} />
                  Inquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
