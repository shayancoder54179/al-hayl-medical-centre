"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

export function Hero() {
  const [heroImgError, setHeroImgError] = useState(false);
  return (
    <section
      id="home"
      className="w-full min-h-auto lg:min-h-[600px] bg-white overflow-hidden flex flex-col justify-center"
      aria-label="Hero"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-1">
            <ScrollReveal as="div" className="space-y-4">
              <span className="inline-block rounded-full bg-[#EFF6FF] text-[#1B4FD8] px-4 py-1.5 text-sm font-medium">
                Trusted Healthcare in Fujairah, UAE
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">
                Your Health Is In Good Hands
              </h1>
              <p className="text-base sm:text-lg text-gray-600 max-w-xl">
                Comprehensive medical care for you and your family — General
                Practice, Dental Surgery, Home Health Care and more. Serving Al
                Hayl, Fujairah.
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href="https://wa.me/971547279513"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#1B4FD8] text-white px-6 py-3 text-sm font-medium hover:bg-[#1539b0] transition-colors"
                >
                  Book Appointment
                </a>
                <a
                  href="tel:+971547279513"
                  className="inline-flex items-center justify-center rounded-full border-2 border-[#1B4FD8] text-[#1B4FD8] px-6 py-3 text-sm font-medium hover:bg-[#EFF6FF] transition-colors"
                >
                  Call: 054 727 9513
                </a>
              </div>
              <div className="flex flex-wrap gap-6 pt-6 text-sm text-gray-600">
                <span className="font-medium text-[#111827]">2+ Doctors</span>
                <span className="font-medium text-[#111827]">Insurance Accepted</span>
                <span className="font-medium text-[#111827]">Home Care Available</span>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal as="div" className="order-2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md h-96 rounded-2xl shadow-2xl bg-[#EFF6FF] overflow-hidden">
              {!heroImgError && (
                <Image
                  src="/medical_reception.png"
                  alt="Al Hayl Medical Center reception"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  onError={() => setHeroImgError(true)}
                />
              )}
              {heroImgError && (
                <div className="absolute inset-0 flex items-center justify-center text-[#1B4FD8] text-lg font-medium px-4">
                  Al Hayl Medical Center
                </div>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
