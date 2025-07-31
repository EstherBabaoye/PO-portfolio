import { useEffect } from "react";
import LoopingTextBanner from "../components/LoopingTextBanner";
import hireMeBadge from "../assets/Hire-me-badge.png";
import { FaLinkedinIn, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import ContactSection from "../components/ContactSection";

const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/[^\w\s]/g, "")
        .replace(/\s+/g, "-");

const Services = () => {
    useEffect(() => {
        document.title = "Services | PO Portfolio";
        window.scrollTo(0, 0);
    }, []);

    const services = [
        { title: "YouTube Scriptwriting" },
        { title: "Ghost Writing" },
        { title: "Copy Writing" },
        { title: "UI/UX Design" },
        { title: "Design System" },
        { title: "Wireframing" },
    ];

    return (
        <>
            <section className="bg-[#5840ba] py-20 px-6 md:px-12 lg:px-20 text-white relative">
                {/* Header */}
                <div className="text-center mb-16 z-10 relative">
                    <p className="text-base sm:text-lg text-[#a3db74] font-medium">
                        — <span className="text-white">Services</span>
                    </p>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-snug">
                        My <span className="text-[#a3db74]">Services</span>
                    </h2>
                </div>

                {/* Services Grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 z-10 relative">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-[#6b55d9] rounded-3xl w-full max-w-xs mx-auto h-[380px] flex flex-col items-center justify-center text-center p-6 shadow-md transition hover:scale-105 group hover:bg-[#f2f2fc] hover:text-black"
                        >
                            <div className="bg-[#866ce6] rounded-full w-20 h-20 flex items-center justify-center mb-4">
                                <span className="text-2xl font-bold text-white transition group-hover:text-black">
                                    UX
                                </span>
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
                                className="text-[#a3db74] hover:underline text-sm font-medium"
                            >
                                Learn more →
                            </Link>
                        </div>
                    ))}
                </div>
            </section>

            <LoopingTextBanner />

            {/* Call To Action Section */}
            <section className="bg-white py-16 sm:py-20 md:py-24 text-center px-4 sm:px-8">
                <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-snug tracking-wide font-[acumin-pro] text-black">
                    Let’s Create an <br />
                    <span className="text-[#6b55d9]">Amazing Project</span>
                    <br />
                    Together!
                </h2>

                <div className="mt-10 sm:mt-12 flex justify-center items-center">
                    {/* Hire Me Badge */}
                    <img
                        src={hireMeBadge}
                        alt="Hire Me Badge"
                        className="w-32 sm:w-40 md:w-48 h-auto object-contain"
                    />
                </div>
            </section>

            <LoopingTextBanner />

            <ContactSection />
            
            <LoopingTextBanner />
        </>
    );
};

export default Services;
