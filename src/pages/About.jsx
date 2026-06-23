import {
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";


const chipsData = [
  { label: "JavaScript" },
  { label: "TypeScript" },
  { label: "Node.js" },
  { label: "React.js" },
  { label: "React Native" },
  { label: "Material UI" },
  { label: "Zustand" },
  { label: "Express" },
  { label: "Firebase" },
  { label: "Tailwind CSS" },
  { label: "MongoDB" },
  { label: "Next.js" },
  { label: "Git" },
  { label: "GitHub" },
];

const SkillPill = ({ icon, text, rotate }) => (
  <motion.div
    whileHover={{
      scale: 1.08,
      y: -5,
      rotate: 0,
    }}
    className="
      flex items-center gap-3
      px-5 py-3
      rounded-full
      bg-white/10
      backdrop-blur-xl
      border border-white/20
      shadow-lg
      text-white
      w-fit
    "
    style={{
      transform: `rotate(${rotate}deg)`,
    }}
  >
    <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center">
      {icon}
    </div>

    <span className="font-medium">{text}</span>
  </motion.div>
);

function About() {

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }} id="about">

      {/* Animated Background */}
      <AnimatedCodeBackground />

      {/* Main Content */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          px: { xs: 3, md: 8 },
          py: { xs: 6, md: 10 },
        }}
      >
        <div className="flex items-center gap-4 justify-center">
          <div className="w-20 h-[1px] bg-white/20" />
          <p className="italic text-slate-400">Hello!</p>
          <div className="w-20 h-[1px] bg-white/20" />
        </div>
        {/* Intro */}
        <div className="relative flex items-center justify-center px-6">

          {/* Left Pills */}
          <div className="hidden lg:flex flex-col gap-20 absolute left-10 xl:left-32">
            <SkillPill text="MERN Stack" rotate={-8} />
            <SkillPill text="AI Tools" rotate={5} />
            <SkillPill text="SaaS Apps" rotate={-6} />
          </div>

          {/* Center Content */}
          <div className="max-w-2xl mx-auto text-center z-10">
            <h2 className="text-2xl md:text-6xl lg:text-5xl font-light leading-[1.25] text-white">
              I help startups turn ideas into
              <span className="text-violet-400">
                {" "}scalable digital products
              </span>

              <br />

              through modern web technologies,
              AI integrations and user-focused
              experiences.
            </h2>
          </div>

          {/* Right Pills */}
          <div className="hidden lg:flex flex-col gap-20 absolute right-10 xl:right-32">
            <SkillPill text="React Native" rotate={8} icon={<img src="" alt="" />} />
            <SkillPill text="Firebase" rotate={-5} />
            <SkillPill text="UI/UX Design" rotate={6} />
          </div>
        </div>
        <section className="relative py-24 overflow-hidden">

          {/* Title */}
          <div className="text-center mb-12">
            <p className="text-violet-400 uppercase tracking-[6px]">
              Tech Stack
            </p>

            <h2 className="text-5xl font-bold text-white mt-4">
              My Technology Arsenal
            </h2>
          </div>

          {/* Row 1 */}
          <div className="overflow-hidden mb-6">
            <motion.div
              className="flex gap-4 w-max"
              animate={{
                x: ["-50%", "0%"],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...chipsData, ...chipsData].map((chip, index) => (
                <div
                  key={index}
                  className="
                px-6 py-3
                rounded-full
                bg-white/10
                backdrop-blur-xl
                border border-white/10
                text-white
                whitespace-nowrap
                hover:scale-110
                transition
              "
                >
                  {chip.label}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Row 2 */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-4 w-max"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...chipsData, ...chipsData].map((chip, index) => (
                <div
                  key={index}
                  className="
                px-6 py-3
                rounded-full
                bg-violet-500/10
                backdrop-blur-xl
                border border-violet-500/20
                text-white
                whitespace-nowrap
                hover:scale-110
                transition
              "
                >
                  {chip.label}
                </div>
              ))}
            </motion.div>
          </div>

        </section>
      </Box>
    </Box>
  );
}

export default About;