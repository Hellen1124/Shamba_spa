// src/pages/Home.jsx

import Hero from "../sections/Hero";
import About from "../sections/About";
import FeaturedProperties from "../sections/FeaturedProperties";
import Testimonials from "../sections/Testimonials";
import CTA from "../sections/CTA";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* === HERO SECTION === */}
      <Hero />

      {/* === ABOUT SECTION === */}
      <About />

      {/* === FEATURED PROPERTIES === */}
      <FeaturedProperties />

      {/* === TESTIMONIALS === */}
      <Testimonials />

      {/* === CALL TO ACTION === */}
      <CTA />
    </main>
  );
}

