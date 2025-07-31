import { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedinIn } from "react-icons/fa";
import LoopingTextBanner from "../components/LoopingTextBanner";
import hireMeBadge from "../assets/Hire-me-badge.png";
import axios from "axios";

const csrfToken = document.querySelector('meta[name="csrf-token"]')?.content;

export default function Contact() {
    const [form, setForm] = useState({
        first_name: "",
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState({ type: "", message: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);

        try {
            await axios.post("/send-contact", form, {
                headers: {
                    "X-CSRF-TOKEN": csrfToken,
                    "Content-Type": "application/json",
                },
            });

            setStatus({
                type: "success",
                message: "Message sent successfully!",
            });

            setForm({
                first_name: "",
                last_name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            setStatus({
                type: "error",
                message: "Failed to send message. Please try again.",
            });
            console.error("Submission error:", error);
        }

        setLoading(false);
    };

    useEffect(() => {
        document.title = "Contact | PO Portfolio";
    }, []);

    return (
        <>
            <section className="bg-[#6b55d9] text-white py-20 px-4 sm:px-6 md:px-10 lg:px-20">
                <div className="max-w-screen-xl mx-auto">
                    {/* Heading */}
                    <div className="text-center mb-12">
                        <p className="text-base sm:text-lg font-semibold mb-2">
                            <span className="text-[#a3db74]">—</span> Contact Us
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug">
                            Let’s{" "}
                            <span className="text-[#a3db74]">Connect</span> &{" "}
                            <span className="text-[#a3db74]">Collaborate</span>
                        </h2>
                    </div>

                    {/* Layout */}
                    <div className="flex flex-col lg:flex-row justify-between gap-12">
                        {/* Left Contact Info */}
                        <div className="lg:w-1/2">
                            <p className="text-lg sm:text-xl md:text-2xl mb-8 leading-relaxed">
                                Let’s work together to create something
                                impactful and meaningful.
                            </p>

                            <ul className="space-y-6 text-base sm:text-lg">
                                {/* Contact Items (same as your original) */}
                            </ul>
                        </div>

                        {/* Right Form */}
                        <form
                            onSubmit={handleSubmit}
                            className="lg:w-1/2 space-y-4"
                        >
                            {status.message && (
                                <div
                                    className={`${
                                        status.type === "success"
                                            ? "bg-green-100 text-green-800 border-green-300"
                                            : "bg-red-100 text-red-800 border-red-300"
                                    } px-4 py-3 rounded-md mb-4 text-sm border`}
                                >
                                    {status.message}
                                </div>
                            )}

                            {/* Name Fields */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    name="first_name"
                                    type="text"
                                    value={form.first_name}
                                    onChange={handleChange}
                                    placeholder="First Name *"
                                    className="flex-1 bg-[#7e66db] text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base"
                                />
                                <input
                                    name="last_name"
                                    type="text"
                                    value={form.last_name}
                                    onChange={handleChange}
                                    placeholder="Last Name *"
                                    className="flex-1 bg-[#7e66db] text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base"
                                />
                            </div>

                            {/* Email + Phone */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email *"
                                    className="flex-1 bg-[#7e66db] text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base"
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone Number *"
                                    className="flex-1 bg-[#7e66db] text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base"
                                />
                            </div>

                            <input
                                name="subject"
                                type="text"
                                value={form.subject}
                                onChange={handleChange}
                                placeholder="Subject *"
                                className="w-full bg-[#7e66db] text-white placeholder-gray-300 px-5 py-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base"
                            />

                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Message *"
                                className="w-full bg-[#7e66db] text-white placeholder-gray-300 px-5 pt-4 h-40 sm:h-52 rounded-xl focus:outline-none focus:ring-2 focus:ring-white text-base resize-none"
                            ></textarea>

                            <button
                                type="submit"
                                disabled={loading}
                                className={`flex items-center mt-2 rounded-full ${
                                    loading
                                        ? "bg-gray-400 cursor-not-allowed"
                                        : "bg-[#a3db74]"
                                } text-black font-semibold shadow-md overflow-hidden group w-fit focus:outline-none focus:ring-2 focus:ring-white`}
                            >
                                <div className="w-10 h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                                    →
                                </div>
                                <span className="px-5 py-2">
                                    {loading ? "Sending..." : "Send Message"}
                                </span>
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <LoopingTextBanner />

            <section className="bg-white py-20 px-4 sm:px-6 lg:px-20 text-center">
                <div className="max-w-screen-xl mx-auto">
                    <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-snug sm:leading-tight tracking-wide font-[acumin-pro] text-black">
                        Let’s Create an <br />
                        <span className="text-[#6b55d9]">
                            Amazing Project
                        </span>{" "}
                        <br />
                        Together!
                    </h2>

                    <div className="mt-10 sm:mt-12 flex justify-center items-center gap-4">
                        <img
                            src={hireMeBadge}
                            alt="Hire Me Badge"
                            className="w-32 sm:w-40 md:w-48 h-auto object-contain"
                        />
                    </div>
                </div>
            </section>
        </>
    );
}
