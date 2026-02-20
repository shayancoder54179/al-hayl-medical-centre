"use client";

import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Call or WhatsApp Us",
    description: "Contact us on 054 727 9513",
  },
  {
    number: 2,
    title: "Confirm Your Appointment",
    description: "We will confirm your slot",
  },
  {
    number: 3,
    title: "Visit The Clinic",
    description: "Walk in at your scheduled time",
  },
];

export function HowItWorks() {
  return (
    <section className="w-full bg-[#1B4FD8] py-20 overflow-hidden" aria-label="How To Book An Appointment">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            How To Book An Appointment
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-10">
          {steps.map((step) => (
            <ScrollReveal key={step.number} as="div" className="text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full border-2 border-white text-white flex items-center justify-center text-2xl font-bold mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-white text-base">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
