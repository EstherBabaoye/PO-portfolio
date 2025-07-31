import { Link } from "react-router-dom";
import hireMeBadge from "../assets/Hire-me-badge.png";
import profileImg from "../assets/profile.png";
import AnimatedButtons from "./AnimatedButtons";
import { motion } from "framer-motion";
import AnimatedTitle from "./AnimatedTitle";

export default function Hero() {
    return (
        <section className="relative mt-24 bg-white min-h-screen flex flex-col items-center justify-center px-6 sm:px-8 md:px-16 overflow-hidden">
            {/* Floating "Hire Me" Badge Image */}
            <div className="absolute top-6 right-6 sm:top-8 sm:right-24 w-24 h-24 sm:w-40 sm:h-40">
                <img
                    src={hireMeBadge}
                    alt="Hire Me Badge"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Intro Text */}
            <p className="text-base sm:text-xl font-medium">
                <span className="text-[#8172b9]">—</span> Hello
            </p>
            <h1 className="text-4xl sm:text-6xl font-semibold text-gray-900 leading-tight text-center z-10">
                I'm{" "}
                <span className="text-[#5840ba] underline decoration-[#5840ba] decoration-[3px] underline-offset-4">
                    Praise,
                </span>
                <br />
                <AnimatedTitle />
            </h1>

            {/* Main Profile + SVG */}
            <div className="relative w-[220px] sm:w-[280px] md:w-[320px] h-[400px] sm:h-[450px] md:h-[500px] mx-auto z-10 -mt-6">
                {/* SVG blobs */}
                <svg
                    className="absolute bottom-0 right-1/2 translate-x-[50%] w-[260px] sm:w-[320px] h-[280px] sm:h-[340px] z-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
                        fill="#5840ba"
                    />
                </svg>
                <svg
                    className="absolute bottom-0 left-1/2 -translate-x-[50%] w-[200px] sm:w-[280px] h-[180px] sm:h-[245px] z-0"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
                        fill="#F0F0F0"
                    />
                </svg>

                {/* Profile Image */}
                <img
                    src={profileImg}
                    alt="Praise Profile"
                    className="w-full h-full object-cover relative z-10 rounded-xl filter grayscale hover:grayscale-0 transition"
                />

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-2 items-center mt-4 sm:mt-0 sm:absolute sm:bottom-5 sm:left-1/2 sm:transform sm:-translate-x-1/2 z-20 bg-white rounded-full px-2 py-2 shadow-md border border-gray-200">
                    <a href="#" className="w-40 text-center ...">
                        Portfolio
                    </a>
                    <Link to="/contact" className="w-40 text-center ...">
                        Hire Me
                    </Link>
                </div>

                {/* Animated Buttons */}
                <div className="absolute -bottom-10 sm:bottom-5 left-1/2 transform -translate-x-1/2 z-20">
                    <AnimatedButtons />
                </div>
            </div>

            {/* Client Avatars */}
            <div className="absolute bottom-32 left-4 sm:left-20 flex flex-col items-start gap-2">
                <p className="text-sm font-bold text-gray-900">450+</p>
                <p className="text-xs text-gray-500">Happy Clients</p>
                <div className="flex items-center -space-x-3">
                    {/* map avatars here if dynamic */}
                </div>
            </div>
        </section>
    );
}
