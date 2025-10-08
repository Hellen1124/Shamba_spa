import { Star } from "lucide-react"; // adjust the path based on your file structure
import testimonial1 from "../assets/testimonial1.jpg";

const testimonials = [
  {
    id: 1,
    name: "Hellen Wamaitha",
    role: "Land Owner, Nanyuki",
    image: testimonial1,
    quote:
      "LandCo Kenya made owning land so easy! Their plots in Nanyuki are genuine and the process was transparent from start to finish. I received my title deed in under two weeks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mary Wanjiru",
    role: "Investor, Naivasha",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    quote:
      "I was initially hesitant, but LandCo’s professionalism and honesty won me over. The Naivasha Lakeview project was everything they promised and more.",
    rating: 5,
  },
  {
    id: 3,
    name: "Peter Otieno",
    role: "Home Builder, Kikuyu",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote:
      "Excellent service and great communication. LandCo’s team helped me find the perfect plot in Kikuyu. I highly recommend them to anyone looking for land in Kenya.",
    rating: 4,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-green-50 py-20 px-6" id="testimonials">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-green-800 mb-4">
          What Our <span className="text-green-600">Clients Say</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Trusted by hundreds of happy landowners across Kenya — here’s what
          some of them had to say about working with LandCo Kenya.
        </p>
      </div>

      {/* === Testimonials Grid === */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-white rounded-2xl shadow-md p-8 text-left hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-14 h-14 rounded-full object-cover mr-4"
              />
              <div>
                <h3 className="font-semibold text-green-800">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  size={18}
                  className="text-yellow-400 fill-yellow-400"
                />
              ))}
            </div>

            <p className="text-gray-700 leading-relaxed italic">
              “{testimonial.quote}”
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
