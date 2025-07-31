import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonials } from "../pages/Testimonials"; // Make sure the path is correct

export default function TestimonialSection() {
  const [index, setIndex] = useState(0);
  const next = () => setIndex((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const current = testimonials[index];

  return (
    <section className="bg-white py-20 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-xl font-medium">
          <span className="text-[#6B55D9]">—</span> Clients Testimonials
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">
          Testimonials that
        </h2>
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#6B55D9] mt-2">
          Speaks to My Results
        </h3>
      </div>

      {/* Testimonial Card with Arrows */}
      <div className="relative">
        <div className="bg-[#f7f7f7] rounded-3xl p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-10 shadow-lg transition-all duration-300">
          {/* Left - Image with Quote */}
          <div className="relative w-full md:w-1/2 flex justify-center">
            <div className="absolute -top-6 left-6 sm:left-10 bg-[#A3DB74] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-black text-4xl sm:text-7xl font-bold shadow">
              “
            </div>

            <div className="bg-white rounded-full overflow-hidden w-52 h-72 sm:w-60 sm:h-80 md:w-72 md:h-[22rem] lg:w-80 lg:h-[24rem] flex items-center justify-center shadow-md">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-4">
              <div className="flex text-yellow-400 text-2xl sm:text-3xl">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>
                    {i < Math.round(current.rating) ? "★" : "☆"}
                  </span>
                ))}
              </div>
              <span className="text-lg sm:text-xl font-medium text-gray-700">
                {current.rating}
              </span>
            </div>
            <p className="text-gray-700 text-lg sm:text-xl mb-6 leading-relaxed">
              {current.review}
            </p>
            <h4 className="text-xl sm:text-2xl font-bold text-gray-900">
              {current.name}
            </h4>
            <p className="text-base sm:text-lg font-semibold text-gray-600">
              {current.role}
            </p>
          </div>
        </div>

        {/* Arrows - Responsive Placement */}
        <div className="flex justify-between mt-10 px-8 md:px-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full z-10">
          <button
            onClick={prev}
            className="bg-black text-white p-4 sm:p-5 md:p-6 rounded-full hover:bg-gray-800 transition"
          >
            <FaArrowLeft />
          </button>
          <button
            onClick={next}
            className="bg-[#6B55D9] text-white p-4 sm:p-5 md:p-6 rounded-full hover:bg-[#5a47b0] transition"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
