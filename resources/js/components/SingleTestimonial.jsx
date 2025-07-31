export default function SingleTestimonial({ testimonial }) {
  return (
    <section className="mt-20 px-4 sm:px-6 lg:px-12">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-xl font-medium text-white">
          <span className="text-[#a3db74]">—</span> Client Testimonial
        </p>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Words from <span className="text-[#a3db74]">My Client</span>
        </h2>
      </div>

      {/* Testimonial Card */}
      <div className="bg-[#7b64dd] rounded-3xl p-6 sm:p-8 md:p-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10 shadow-md transition-all duration-300">
        {/* Left - Image with Quote */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          {/* Quote Icon */}
          <div className="absolute top-4 sm:top-6 left-10 sm:left-16 bg-[#A3DB74] w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-black text-4xl sm:text-6xl font-bold shadow">
            “
          </div>

          {/* Profile Image */}
          <div className="bg-white rounded-full overflow-hidden w-40 h-56 sm:w-48 sm:h-64 md:w-60 md:h-80 flex items-center justify-center shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="w-full lg:w-2/3 text-center lg:text-left text-white">
          <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
            <div className="text-yellow-400 text-2xl sm:text-3xl">
              {"★".repeat(Math.round(testimonial.rating)) +
                "☆".repeat(5 - Math.round(testimonial.rating))}
            </div>
            <span className="text-lg sm:text-xl font-medium">
              {testimonial.rating.toFixed(1)}
            </span>
          </div>

          <p className="text-base sm:text-lg md:text-xl italic mb-6 leading-relaxed">
            "{testimonial.review}"
          </p>

          <h4 className="text-xl sm:text-2xl font-bold">{testimonial.name}</h4>
          <p className="text-sm sm:text-base font-medium text-gray-200">
            {testimonial.role}
          </p>
        </div>
      </div>
    </section>
  );
}
