import { Box } from "@mui/material";
import { motion } from "framer-motion";
import projects from "../data/project.json";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";

export default function Project() {
  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }} id="project"
    >
      <AnimatedCodeBackground />

      <div className="relative z-10">

        {/* Heading */}
        <div className="text-center pt-20 pb-20">
          <h2 className="text-5xl md:text-7xl font-bold text-white">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4 text-lg">
            Things I've built recently
          </p>
        </div>

        <div
          className="relative"
          style={{
            height: `${projects.length * 100}vh`,
          }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              className="sticky top-0 h-screen flex items-center px-6 md:px-12"
              style={{
                zIndex: index + 1,
              }}
            >
              <div
                className="
          max-w-7xl
          mx-auto
          w-full
          rounded-[32px]
          overflow-hidden
          backdrop-blur-xl
          bg-white/5
          border
          border-white/10
          shadow-2xl
        "
              >
                <div className="grid lg:grid-cols-2 min-h-[600px]">

                  {/* IMAGE */}
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="
                        w-full
                        h-full
                        object-cover
                        transition
                        duration-700
                        hover:scale-105
                      "
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col justify-center p-10 md:p-16">

                    <p className="text-violet-400 text-lg mb-2">
                      {project.framework}
                    </p>

                    <h2 className="text-white text-4xl md:text-6xl font-bold mb-6">
                      {project.name}
                    </h2>

                    <p className="text-slate-400 text-lg leading-relaxed mb-8">
                      Built using {project.framework}. A modern solution
                      focused on performance, scalability and user
                      experience.
                    </p>

                    <div className="flex flex-wrap gap-3 mb-10">

                      <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white">
                        React
                      </span>

                      <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white">
                        Node.js
                      </span>

                      <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-white">
                        MongoDB
                      </span>

                    </div>

                    <div className="flex items-center justify-between">

                      <span className="text-slate-500">
                        {project.createdAt}
                      </span>

                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer"
                        className="
                          px-6
                          py-3
                          rounded-full
                          bg-violet-600
                          text-white
                          hover:bg-violet-500
                          transition
                        "
                      >
                        View Project →
                      </a>
                    </div>

                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Spacer */}
        <div className="h-[50vh]" />
      </div>
    </Box>
  );
}