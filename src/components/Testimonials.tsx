"use client";

import { ScrollReveal } from "./ScrollReveal";

const testimonials = [
  {
    quote:
      "The doctors here are very professional and caring. Dr. Suhail took the time to properly diagnose my condition.",
    name: "Ahmed K.",
    location: "Fujairah",
  },
  {
    quote:
      "Best dental experience I have had. Dr. Sami is excellent and very gentle.",
    name: "Sarah M.",
    location: "Al Hayl",
  },
  {
    quote:
      "Home health care service was a lifesaver for my elderly mother. Highly recommend.",
    name: "Mohammed R.",
    location: "Fujairah",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5 mb-3" aria-hidden>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className="w-5 h-5 text-yellow-400"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="w-full bg-[#EFF6FF] py-16 sm:py-20 overflow-hidden" aria-label="What Our Patients Say">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            What Our Patients Say
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <ScrollReveal key={t.name} as="div">
              <div className="bg-white rounded-xl p-8 shadow-sm h-full flex flex-col border border-gray-100">
                <span className="text-6xl text-sky-300 font-serif leading-none">"</span>
                <Stars />
                <p className="text-gray-700 text-base flex-1">&ldquo;{t.quote}&rdquo;</p>
                <p className="mt-4 font-semibold text-[#111827]">{t.name}</p>
                <p className="text-sm text-gray-500">{t.location}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
