import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import jobImg from "../assets/job.png";
import profileImg from "../assets/profile.png";
import LoopingTextBanner from "../components/LoopingTextBanner";

export const projects = [
    {
        slug: "podcast-mobile-app-solution",
        title: "Podcast Mobile App Solution",
        image: jobImg,
        category: "App Design",
        description:
            "An all-in-one mobile solution for podcast streaming, favorites, and user profiles.",
        tags: ["App Design", "UI/UX", "React Native"],
        reverse: false,
    },
    {
        slug: "podcast-landing-page-1",
        title: "Podcast - Podcast Mobile Application Landing Page",
        image: jobImg,
        category: "Web Design",
        description:
            "Landing page for a podcast application, optimized for conversions and mobile responsiveness.",
        tags: ["Landing Page", "Figma", "Tailwind CSS"],
        reverse: true,
    },
    {
        slug: "fitness-app",
        title: "Fitness App - Fitness and Workout App Solution",
        image: "/images/fitness-app.png",
        category: "App Design",
    },
    {
        slug: "car-parking-app",
        title: "Car Parking App: Car Parking App Solution",
        image: "/images/car-parking-app.png",
        category: "App Design",
    },
    // Add more if needed...
];

export default function Projects() {
    useEffect(() => {
        document.title = "Projects| PO Portfolio";
    }, []);
    const [visibleCount, setVisibleCount] = useState(3);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + 3);
    };

    return (
        <>
            <section className="px-4 sm:px-6 md:px-16 lg:px-28 pt-20 sm:pt-24 pb-10 sm:pb-16 bg-white text-center">
                {/* Heading */}
                <div className="mb-10 sm:mb-12">
                    <p className="text-[#6b55d9] text-sm sm:text-base font-medium mb-1">
                        — My Projects
                    </p>
                    <h2 className="text-3xl sm:text-4xl font-bold text-black leading-snug">
                        All <span className="text-[#7b64dd]">Projects</span>
                    </h2>
                </div>

                {/* Projects Grid */}
                <div className="grid gap-8 sm:gap-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.slice(0, visibleCount).map((project) => (
                        <Link
                            to={`/projects/${project.slug}`}
                            key={project.slug}
                            className="group"
                        >
                            <div className="rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-56 sm:h-64 object-cover"
                                />
                            </div>
                            <div className="mt-4 text-left px-1 sm:px-2">
                                <span className="bg-[#a3db74] text-black px-3 py-1 text-xs sm:text-sm font-semibold rounded-full">
                                    {project.category}
                                </span>
                                <h3 className="text-base sm:text-lg font-semibold mt-3 text-black group-hover:text-[#7b64dd] transition">
                                    {project.title}
                                </h3>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* Load More Button */}
                {visibleCount < projects.length && (
                    <div className="text-center mt-10 sm:mt-12">
                        <button
                            onClick={handleLoadMore}
                            className="bg-[#a3db74] text-black font-semibold text-sm sm:text-base px-5 sm:px-6 py-3 rounded-full hover:scale-105 transition"
                        >
                            Load More Projects
                        </button>
                    </div>
                )}
            </section>

            <LoopingTextBanner />

            {/* Hire Me Section */}
            <section className="bg-[#5840ba] pt-24 relative overflow-hidden">
                <div className="container mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-10">
                    {/* Image Container */}
                    <div className="relative w-[250px] sm:w-[300px] md:w-[320px] h-[400px] sm:h-[460px] md:h-[500px] mx-auto z-10 -mt-6">
                        <svg
                            className="absolute bottom-0 right-3/4 translate-x-[50%] w-[280px] sm:w-[320px] h-[240px] sm:h-[300px] z-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L75,100 H25 L0,10"
                                fill="#a3db74"
                            />
                        </svg>
                        <svg
                            className="absolute bottom-0 left-3/4 -translate-x-[50%] w-[200px] sm:w-[260px] h-[180px] sm:h-[240px] z-0"
                            viewBox="0 0 100 100"
                            preserveAspectRatio="none"
                        >
                            <path
                                d="M0,10 Q0,0 10,0 H90 Q100,0 100,10 L85,100 H15 L0,10"
                                fill="#7b64dd"
                            />
                        </svg>
                        <img
                            src={profileImg}
                            alt="Praise Profile"
                            className="w-full h-full object-cover relative z-10 filter grayscale hover:grayscale-0 transition"
                        />
                    </div>

                    {/* Text Content */}
                    <div className="text-center md:text-left max-w-2xl px-2 sm:px-0">
                        <p className="text-sm text-white mb-2 font-medium">
                            – Available For Projects
                        </p>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                            Have a{" "}
                            <span className="text-[#a3db74]">Project</span>{" "}
                            <span className="text-[#a3db74]">Idea</span> in
                            Mind?
                        </h2>
                        <p className="text-white mb-6 text-base sm:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor
                        </p>
                        <Link to="/contact">
                            <button className="bg-[#a3db74] text-black px-6 py-3 font-semibold text-sm rounded-full flex items-center justify-center gap-2 hover:scale-105 transition">
                                <span className="bg-white w-6 h-6 rounded-full flex items-center justify-center text-[#7b64dd] font-bold text-lg">
                                    →
                                </span>
                                Hire Me Now
                            </button>
                        </Link>
                    </div>
                </div>
            </section>

            <LoopingTextBanner />
        </>
    );
}
