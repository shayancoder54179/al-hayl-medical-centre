"use client";

import { useState, FormEvent } from "react";
import { ScrollReveal } from "./ScrollReveal";

const SERVICE_OPTIONS = [
  "General Practice",
  "Dental",
  "Home Care",
  "Other",
];

export function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const lines = [
      "Book Appointment Request",
      `Name: ${name || "—"}`,
      `Phone: ${phone || "—"}`,
      `Service: ${service || "—"}`,
      message ? `Message: ${message}` : "",
    ].filter(Boolean);
    const text = lines.join("\n");
    const url = `https://wa.me/971547279513?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section id="contact" className="w-full bg-[#F9FAFB] py-16 sm:py-20 overflow-hidden" aria-label="Book An Appointment">
      <div className="w-full max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 min-w-0">
        <ScrollReveal as="div" className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
            Book An Appointment
          </h2>
        </ScrollReveal>
        <ScrollReveal as="div">
          <form
            onSubmit={handleSubmit}
            className="w-full min-w-0 bg-white rounded-xl shadow-md border border-gray-100 p-6 sm:p-8 space-y-4"
          >
            <div>
              <label htmlFor="contact-name" className="block text-sm font-medium text-[#111827] mb-1">
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-[#111827] focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 outline-none transition"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-sm font-medium text-[#111827] mb-1">
                Phone
              </label>
              <input
                id="contact-phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-[#111827] focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 outline-none transition"
                placeholder="Your phone"
              />
            </div>
            <div>
              <label htmlFor="contact-service" className="block text-sm font-medium text-[#111827] mb-1">
                Service
              </label>
              <select
                id="contact-service"
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-[#111827] focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 outline-none transition"
              >
                <option value="">Select service</option>
                {SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-sm font-medium text-[#111827] mb-1">
                Message
              </label>
              <textarea
                id="contact-message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-[#111827] focus:border-[#1B4FD8] focus:ring-2 focus:ring-[#1B4FD8]/20 outline-none transition resize-y"
                placeholder="Your message (optional)"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-full bg-[#1B4FD8] text-white py-3 px-6 font-medium hover:bg-[#1539b0] transition-colors"
            >
              Submit
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}
