import { useState } from "react";

const faqs = [
  {
    question: "What industries have you worked in as a product designer?",
    answer: "Lorem",
  },
  {
    question: "Can I download your resume/CV for information?",
    answer:
      "Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.",
  },
  {
    question: "Are you available for freelance design work?",
    answer: "",
  },
  {
    question: "What tools do you use for your design work?",
    answer: "",
  },
  {
    question: "How do I navigate through your portfolio projects?",
    answer: "",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#5A3FD1] py-24 px-4 md:px-16 text-white font-sans">
      <div className="text-center mb-16">
        <p className="uppercase text-xl tracking-wide  font-semibold">
          {" "}
          <span className="text-[#A3DB74]">—</span>FAQs
        </p>
        <h2 className="text-5xl font-bold mt-2">
          Questions? <span className="text-[#A3DB74]">Look here.</span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl px-6 py-6 transition-all duration-300 ease-in-out ${
              openIndex === index ? "bg-[#A3DB74] text-black" : "bg-[#7A5DF3]"
            }`}
          >
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className={`text-xl font-bold`}>{faq.question}</h3>
              <span className="text-2xl font-bold">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            {openIndex === index && faq.answer && (
              <p className="mt-3 text-base text-gray-800 leading-relaxed">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
