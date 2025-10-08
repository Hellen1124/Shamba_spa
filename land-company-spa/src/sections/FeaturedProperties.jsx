import { MapPin, ArrowRight } from "lucide-react";
import { propertiesData } from "../data/propertiesData";

export default function FeaturedProperties() {
  const featuredProperties = propertiesData.filter((p) => p.featured);

  return (
    <section className="bg-gray-50 py-20 px-6" id="properties">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          Featured <span className="text-green-600">Properties</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore some of our top-selling projects across Kenya — all verified,
          affordable, and ready for ownership.
        </p>
      </div>

      {/* === Property Cards Grid === */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featuredProperties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
          >
            <img
              src={property.image}
              alt={property.title}
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {property.title}
              </h3>
              <div className="flex items-center text-gray-500 mb-3">
                <MapPin size={16} className="mr-2 text-green-600" />
                <span>{property.location}</span>
              </div>
              <p className="text-gray-700 mb-2">{property.size}</p>
              <p className="text-green-700 font-bold mb-4">{property.price}</p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-green-700 font-medium hover:text-green-900 transition-colors"
              >
                Inquire Now <ArrowRight size={18} />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* === View All Button === */}
      <div className="text-center mt-12">
        <a
          href="/properties"
          className="inline-block bg-green-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-green-800 transition-colors"
        >
          View All Properties
        </a>
      </div>
    </section>
  );
}
