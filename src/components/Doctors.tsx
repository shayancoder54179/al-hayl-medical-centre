"use client";

import { Check } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const doctors = [
  {
    name: "Dr. Suhail Ahmad",
    specialty: "General Practitioner",
    qualifications: "MBBS MOH FCPS-I FCPS-II",
    services: [
      "Consultation & Diagnosis",
      "Acute Medical Emergencies",
      "Diabetes & Hypertension Management",
      "Trauma & Wound Care",
      "Common Health Problems",
    ],
  },
  {
    name: "Dr. Sami Memon",
    specialty: "General Practitioner & Dental Surgeon",
    qualifications: "BDS MCPS Certification in Implantology",
    services: [
      "Routine Dental Checkups",
      "Dental Cleanings & X-rays",
      "Root Canal Therapy",
      "Extractions",
      "Restorative Dentistry",
    ],
  },
];

function DoctorCard({ doctor }: { doctor: (typeof doctors)[0] }) {
  return (
    <article className="bg-white rounded-xl shadow-md border-t-4 border-t-[#1B4FD8] p-8">
      <h3 className="text-2xl font-bold text-[#111827]">{doctor.name}</h3>
      <p className="text-[#1B4FD8] font-semibold mt-2">{doctor.specialty}</p>
      <p className="text-gray-500 text-sm mt-1">{doctor.qualifications}</p>
      <ul className="mt-6 space-y-2 text-sm text-gray-600 list-none p-0">
        {doctor.services.map((s) => (
          <li key={s} className="flex items-center gap-2">
            <Check className="w-5 h-5 shrink-0 text-[#1B4FD8]" strokeWidth={2.5} />
            {s}
          </li>
        ))}
      </ul>
      <a
        href="#contact"
        className="mt-8 inline-block w-full text-center rounded-lg bg-[#1B4FD8] px-4 py-3 font-semibold text-white shadow-sm hover:bg-[#1539a8] transition-colors"
      >
        Book Appointment
      </a>
    </article>
  );
}

export function Doctors() {
  return (
    <section id="doctors" className="w-full bg-[#F9FAFB] py-16 sm:py-20 overflow-hidden" aria-label="Meet Our Doctors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal as="div" className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#111827]">
            Meet Our Doctors
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {doctors.map((doctor) => (
            <ScrollReveal key={doctor.name} as="div">
              <DoctorCard doctor={doctor} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
