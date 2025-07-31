import { useEffect } from "react";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function FAQ() {
  useEffect(() => {
    document.title = "FAQ | PO Portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <FAQSection />

      {/* Contact CTA Section */}
      <section className="bg-[#5A3FD1] text-white text-center py-16 sm:py-20 px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 leading-snug">
          Still have a question?
        </h2>

        <Link
          to="/contact"
          className="inline-flex flex-wrap items-center rounded-full overflow-hidden shadow-md transition-transform hover:scale-105"
        >
          {/* Left Circle */}
          <div className="bg-white w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-[#6b55d9]">
            <FaArrowRight className="text-lg sm:text-xl" />
          </div>

          {/* Right Text */}
          <span className="bg-[#a3db74] text-black h-12 sm:h-14 px-5 sm:px-6 py-3 sm:py-4 font-semibold text-sm sm:text-base">
            Contact Us
          </span>
        </Link>
      </section>
    </>
  );
}
