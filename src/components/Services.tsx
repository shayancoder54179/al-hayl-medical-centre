"use client";

import { Heart, Home, FlaskConical, Pill, Shield, Smile } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    title: "General Practice",
    description: "Routine checkups, chronic disease management, and emergencies.",
    icon: <Heart className="w-10 h-10" />,
  },
  {
    title: "Dental Surgery",
    description: "Checkups, cleanings, root canal, extractions, and more.",
    icon: <Smile className="w-10 h-10" />,
  },
  {
    title: "Home Health Care",
    description: "Medical care at your doorstep when you need it most.",
    icon: <Home className="w-10 h-10" />,
  },
  {
    title: "Lab Investigations",
    description: "On-site collection point for all lab investigations.",
    icon: <FlaskConical className="w-10 h-10" />,
  },
  {
    title: "Pharmacy",
    description: "Wide range of medications available on-site.",
    icon: <Pill className="w-10 h-10" />,
  },
  {
    title: "Insurance Desk",
    description: "We accept major insurance providers.",
    icon: <Shield className="w-10 h-10" />,
  },
];

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="h-full bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-all duration-300">
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-[#EFF6FF] text-[#1B4FD8] mb-4">
        {service.icon}
      </div>
      <h3 className="text-lg font-bold text-[#111827] mb-2">
        {service.title}
      </h3>
      <p className="text-gray-600 text-sm">{service.description}</p>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="w-full bg-gray-50 py-16 sm:py-20 overflow-hidden" aria-label="Our Medical Services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Our Medical Services
          </h2>
          <p className="mt-2 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Everything your family needs under one roof.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ScrollReveal key={service.title} as="div" className="h-full">
              <ServiceCard service={service} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
