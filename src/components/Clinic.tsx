"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

const hours = [
  { days: "Sun - Thu", time: "9:00 AM - 1:00 PM & 4:30 PM - 9:30 PM" },
  { days: "Fri", time: "9:00 AM - 12:00 PM & 4:30 PM - 9:30 PM" },
];

export function Clinic() {
  const [receptionImgError, setReceptionImgError] = useState(false);
  return (
    <section className="w-full bg-white py-16 sm:py-20 overflow-hidden" aria-label="Visit Us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <ScrollReveal as="div" className="order-2 lg:order-1 relative aspect-[4/3] rounded-xl overflow-hidden bg-[#EFF6FF]">
            {!receptionImgError && (
              <Image
                src="/medical_reception.png"
                alt="Al Hayl Medical Center reception"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                onError={() => setReceptionImgError(true)}
              />
            )}
            {receptionImgError && (
              <div className="absolute inset-0 flex items-center justify-center text-[#1B4FD8] font-medium">
                Clinic Reception
              </div>
            )}
          </ScrollReveal>
          <ScrollReveal as="div" className="order-1 lg:order-2 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-[#111827]">
              Visit Us At Al Hayl Medical Center
            </h2>
            <div className="text-gray-600 space-y-2">
              <p className="font-medium text-[#111827]">Address</p>
              <p>
                Al Hayl Industrial Area, Opposite Fujairah Plastic Factory,
                Fujairah UAE
              </p>
            </div>
            <div className="text-gray-600 space-y-2">
              <p className="font-medium text-[#111827]">Phone</p>
              <p>
                <a href="tel:+971547279513" className="hover:text-[#1B4FD8]">054 727 9513</a>
                {" / "}
                <a href="tel:+97192370377" className="hover:text-[#1B4FD8]">09 237 0377</a>
              </p>
            </div>
            <div className="text-gray-600 space-y-2">
              <p className="font-medium text-[#111827]">Email</p>
              <p>
                <a href="mailto:Admin@alhaylmedicalcenter.com" className="hover:text-[#1B4FD8]">
                  Admin@alhaylmedicalcenter.com
                </a>
              </p>
            </div>
            <div className="text-gray-600 space-y-2">
              <p className="font-medium text-[#111827]">Hours</p>
              <table className="w-full text-sm">
                <tbody>
                  {hours.map((row) => (
                    <tr key={row.days}>
                      <td className="py-1 pr-4 font-medium">{row.days}</td>
                      <td className="py-1">{row.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <a
              href="https://wa.me/971547279513"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3 text-sm font-medium hover:bg-[#20bd5a] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </ScrollReveal>
        </div>
        <div className="mt-10 w-full min-w-0 -mx-4 rounded-none sm:mx-0 sm:rounded-xl overflow-hidden shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.097999279811!2d56.26924407523174!3d25.098543777774548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef4ff3de80f0cdb%3A0xf5e888991ffc123d!2sAl%20Hayl%20Medical%20Centre%20LLC!5e0!3m2!1sen!2sae!4v1771616342004!5m2!1sen!2sae"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Al Hayl Medical Centre location"
          />
        </div>
      </div>
    </section>
  );
}
