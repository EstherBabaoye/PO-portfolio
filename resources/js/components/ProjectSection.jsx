// src/components/ProjectSection.jsx
import { Link } from "react-router-dom";
import { projects } from "../pages/Projects"; // ✅ Import directly

export default function ProjectSection() {
  const visibleProjects = projects.slice(0, 2); // 👈 Always show only first 2

  return (
    <section className="bg-[#6b55d9] text-white pt-24 pb-28 px-6 md:px-28 relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between mb-16 flex-wrap gap-6">
        <div>
          <p className="text-white text-xl font-medium mb-2">
            <span className="text-[#a3db74]">— </span>Projects
          </p>
          <h2 className="text-5xl font-bold">
            My <span className="text-[#a3db74]">Latest Projects</span>
          </h2>
        </div>
        <Link to="/projects">
          <button className="flex items-center rounded-full bg-[#a3db74] text-black font-semibold shadow-md overflow-hidden group">
            <div className="w-12 h-12 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
              →
            </div>
            <span className="px-4">View All Projects</span>
          </button>
        </Link>
      </div>

      {/* Project Cards */}
      {visibleProjects.map((project, index) => (
        <div
          key={project.slug}
          className={`flex flex-col ${
            index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
          } bg-[#7b64dd] rounded-[40px] overflow-hidden mb-12 shadow-lg`}
        >
          {/* Image */}
          <div className="bg-[#7b64dd] w-full md:w-1/2 flex justify-center items-center">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-contain p-6 md:p-4 rounded-[40px]"
            />
          </div>

          {/* Content */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center">
            <div className="flex gap-4 mb-4 flex-wrap">
              {project.category && (
                <span className="bg-[#a3db74] text-black text-sm px-4 py-1 rounded-full">
                  {project.category}
                </span>
              )}
            </div>
            <h3 className="text-4xl font-bold mb-4">{project.title}</h3>
            <Link to={`/projects/${project.slug}`}>
              <button className="flex items-center rounded-full bg-[#a3db74] text-black font-semibold shadow-md overflow-hidden group w-fit">
                <div className="w-10 h-10 bg-white text-black flex items-center justify-center ml-[-6px] z-10 border-4 border-white rounded-full">
                  →
                </div>
                <span className="px-4 py-2">View Details</span>
              </button>
            </Link>
          </div>
        </div>
      ))}
    </section>
  );
}
