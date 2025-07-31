import { useEffect } from "react";
import Hero from "../components/Hero";
import LoopingTextBanner from "../components/LoopingTextBanner";
import TestimonialSection from "../components/TestimonialSection";
import FAQSection from "../components/FAQSection";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";
import ProjectSection from "../components/ProjectSection";

const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w\-]+/g, "");

export default function Home() {
    useEffect(() => {
        document.title = "Home | PO Portfolio";
    }, []);

    return (
        <div>
            <Hero />
            <LoopingTextBanner />
            <section className="bg-[#5840ba] py-20 text-white relative px-4 sm:px-8 md:px-16 lg:px-28">
                {/* Header */}
                <div className="mb-16 z-10 relative">
                    <p className="text-base sm:text-lg md:text-xl text-[#a3db74] font-medium">
                        — <span className="text-white">Services</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium">
                        My <span className="text-[#a3db74]">Services</span>
                    </h2>
                </div>

                {/* View All Services Button */}
                <div className="absolute top-5 right-4 sm:right-8 md:right-16 lg:right-28 z-10">
                    <Link to="/services">
                        <button className="flex items-center gap-2 bg-[#a3db74] text-black px-4 py-2 rounded-full text-xs sm:text-sm font-semibold hover:bg-[#a3db74] transition">
                            <span className="inline-flex items-center justify-center w-5 h-5 bg-white rounded-full text-[#5840ba] font-bold">
                                +
                            </span>
                            View All Services
                        </button>
                    </Link>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 z-10 relative mt-20">
                    {[
                        {
                            title: "YouTube Scriptwriting",
                            icon: (
                                <span className="text-2xl font-bold text-white transition group-hover:text-black">
                                    UX
                                </span>
                            ),
                        },
                        {
                            title: "Ghost Writing",
                            icon: (
                                <svg
                                    className="w-8 h-8 text-white transition group-hover:text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M12 2L13.09 8.26L19 8.27L14.5 11.97L15.58 18.22L12 14.77L8.42 18.22L9.5 11.97L5 8.27L10.91 8.26L12 2Z" />
                                </svg>
                            ),
                        },
                        {
                            title: "Copy Writer",
                            icon: (
                                <svg
                                    className="w-8 h-8 text-white transition group-hover:text-black"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                >
                                    <rect
                                        x="3"
                                        y="4"
                                        width="18"
                                        height="16"
                                        rx="2"
                                    />
                                    <path d="M3 10h18" />
                                </svg>
                            ),
                        },
                    ].map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#6b55d9] rounded-3xl w-full h-auto min-h-[360px] flex flex-col items-center justify-center text-center p-6 shadow-md transition hover:scale-105 group hover:bg-[#f2f2fc] hover:text-black"
                        >
                            <div className="bg-[#866ce6] rounded-full w-20 h-20 flex items-center justify-center mb-4">
                                {service.icon}
                            </div>
                            <h3 className="text-lg sm:text-xl font-semibold mb-2 group-hover:text-black transition">
                                {service.title}
                            </h3>
                            <p className="text-sm text-gray-200 group-hover:text-black mb-4 transition">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit
                            </p>
                            <Link
                                to={`/services/${slugify(service.title)}`}
                                className="text-sm text-[#a3db74] font-medium hover:underline"
                            >
                                Learn more →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
            <section className="bg-white pt-20 pb-16 text-black relative px-6 md:px-20">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left Purple Box */}
                    <div className="relative bg-[#6b55d9] text-white rounded-tr-[20px] rounded-bl-[20px] w-full max-w-sm lg:w-[350px] h-[400px] sm:h-[450px] lg:h-[500px] flex flex-col items-center justify-center">
                        {/* Large 6 */}
                        <div className="absolute text-[200px] sm:text-[300px] md:text-[400px] lg:text-[500px] font-bold leading-none text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-20">
                            6
                        </div>

                        {/* Vertical Name */}
                        <div className="absolute -right-8 sm:-right-16 top-1/2 transform -translate-y-1/2 h-full flex items-center">
                            <p className="text-white font-semibold text-xl sm:text-3xl md:text-4xl lg:text-5xl tracking-widest rotate-[-90deg] origin-left whitespace-nowrap">
                                STORY TELLER
                            </p>
                        </div>

                        {/* Subtitle */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-semibold z-10 text-center text-lg sm:text-xl">
                            Years of <br /> Experience
                        </div>
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 w-full text-center lg:text-left">
                        <p className="text-md sm:text-lg text-[#6b55d9] font-semibold mb-2">
                            — <span className="text-black">About Me</span>
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                            Who is{" "}
                            <span className="text-[#6b55d9]">
                                Praise <br className="block lg:hidden" />{" "}
                                Olaseni?
                            </span>
                        </h2>
                        <p className="text-gray-600 text-sm sm:text-md max-w-xl mx-auto lg:mx-0 mb-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </p>

                        {/* Stats */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-8 mb-6">
                            <div>
                                <p className="text-2xl font-bold">600+</p>
                                <p className="text-base text-gray-600">
                                    Project Completed
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold">50+</p>
                                <p className="text-base text-gray-600">
                                    Industry Covered
                                </p>
                            </div>
                        </div>

                        {/* Download Button */}
                        <div className="flex justify-center lg:justify-start">
                            <button className="flex items-center rounded-full bg-[#a3db74] shadow-md overflow-hidden group">
                                {/* Black Left Circle */}
                                <div className="w-12 sm:w-14 h-10 sm:h-12 bg-black px-2 flex items-center justify-center ml-[-6px] z-10 border-4 border-black">
                                    <div className="w-8 h-6 sm:w-10 sm:h-8 bg-white text-black flex items-center justify-center rounded-full text-base sm:text-lg font-bold">
                                        →
                                    </div>
                                </div>

                                {/* Text */}
                                <span className="px-4 py-2 text-sm sm:text-base font-semibold text-black">
                                    Download CV
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            {/* <section className="bg-white pt-12 pb-20 px-4 sm:px-6 md:px-20 text-black"> */}
                <div className="text-center mb-12 sm:mb-16">
                    <p className="text-lg sm:text-xl font-semibold mb-2">
                        <span className="text-[#6b55d9]">—</span> Education &
                        Work
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                        My <span className="text-[#6b55d9]">Education</span> &{" "}
                        <span className="text-[#6b55d9]">Work Experience</span>
                    </h2>
                </div>

                <div className="flex flex-col lg:flex-row justify-center gap-10">
                    {/* Education Card */}
                    <div className="bg-[#f2f2f2] rounded-xl shadow-md p-6 sm:p-8 w-full lg:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#6b55d9] p-2 sm:p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                >
                                    <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 7.25L4.21 7 12 3.75 19.79 7 12 9.25zm-6.5 4.94v2.24c0 1.16 2.91 3.07 6.5 3.07s6.5-1.91 6.5-3.07v-2.24l-6.5 2.95-6.5-2.95z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6b55d9]">
                                Education
                            </h3>
                        </div>

                        <hr className="border-t border-gray-500 opacity-50 mb-6" />

                        <div className="space-y-6">
                            {[
                                {
                                    school: "Harmony Institute",
                                    year: "2012 – 2014",
                                    degree: "Master in Visual Arts",
                                },
                                {
                                    school: "Aurora Academy",
                                    year: "2008 – 2012",
                                    degree: "Bachelor in Visual Arts",
                                },
                                {
                                    school: "Crystalbrook",
                                    year: "1996 – 2008",
                                    degree: "High School",
                                },
                            ].map(({ school, year, degree }, i) => (
                                <div key={i}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                                        <h4 className="text-2xl sm:text-3xl font-semibold">
                                            {school}
                                        </h4>
                                        <span className="text-base sm:text-xl font-medium text-gray-700 bg-white px-3 py-2 rounded-xl">
                                            {year}
                                        </span>
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-500">
                                        {degree}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Work Experience Card */}
                    <div className="bg-[#f2f2f2] rounded-xl shadow-md p-6 sm:p-8 w-full lg:w-1/2">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="bg-[#6b55d9] p-2 sm:p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="white"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6 sm:w-8 sm:h-8"
                                >
                                    <path d="M10 2h4a2 2 0 0 1 2 2v2h4a2 2 0 0 1 2 2v2H2V8a2 2 0 0 1 2-2h4V4a2 2 0 0 1 2-2zm0 2v2h4V4h-4zM2 12h20v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8z" />
                                </svg>
                            </div>
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#6b55d9]">
                                Work Experience
                            </h3>
                        </div>

                        <hr className="border-t border-gray-500 opacity-50 mb-6" />

                        <div className="space-y-6">
                            {[
                                {
                                    company: "Insightlancer",
                                    year: "2018 – 2024",
                                    role: "Senior Product Designer",
                                },
                                {
                                    company: "Self-Employed",
                                    year: "2016 – 2018",
                                    role: "Visual Artist",
                                },
                                {
                                    company: "KG Graphics Studio",
                                    year: "2014 – 2016",
                                    role: "Web Designer",
                                },
                            ].map(({ company, year, role }, i) => (
                                <div key={i}>
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 sm:gap-0">
                                        <h4 className="text-2xl sm:text-3xl font-semibold">
                                            {company}
                                        </h4>
                                        <span className="text-base sm:text-xl font-medium text-gray-700 bg-white px-3 py-2 rounded-xl">
                                            {year}
                                        </span>
                                    </div>
                                    <p className="text-lg sm:text-xl text-gray-500">
                                        {role}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            {/* </section> */}
            <ProjectSection />;
            <LoopingTextBanner />
            <ContactSection />
            <LoopingTextBanner />
            <TestimonialSection />
            <FAQSection />
            <LoopingTextBanner />
        </div>
    );
}
