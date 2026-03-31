import React, { useState } from "react";
import { Link } from "react-router";
import {
  Chip,
  Stack,
  Button,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";
import Contact from "./Contact"
import About from "./About";
import Project from "./Project";
import Certificate from "./Certificate";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";
import Footer from "./Footer";

const text = "Developer";
const name = "Aryan";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const chipContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const chipDrop = {
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 250, damping: 18 },
  },
};

const chipsData = [
  { label: "JavaScript", color: "warning", variant: "filled" },
  { label: "TypeScript", color: "primary", variant: "filled" },
  { label: "Node.js", color: "success", variant: "filled" },
  { label: "React.js", color: "info", variant: "filled" },
  { label: "React Native", color: "secondary", variant: "filled" },
  { label: "Material UI", color: "error", variant: "filled" },
  { label: "Zustand", color: "default", variant: "filled" },
  { label: "Express", color: "success", variant: "outlined" },
  { label: "Firebase", color: "warning", variant: "outlined" },
  { label: "Tailwind CSS", color: "info", variant: "outlined" },
  { label: "MongoDB", color: "success", variant: "outlined" },
  { label: "Next.js", color: "primary", variant: "outlined" },
  { label: "Git", color: "secondary", variant: "outlined" },
  { label: "GitHub", color: "default", variant: "outlined" },
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const theme = useTheme();

  return (
    <div className="w-full relative overflow-hidden">

      {/* Animated Background */}
      <AnimatedCodeBackground />

      {/* HERO */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 pt-24 pb-20">

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col md:flex-row items-center justify-between gap-12"
        >

          {/* IMAGE */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:w-1/2"
          >
            <img
              src="/developer.png"
              alt="Developer"
              className="w-[220px] sm:w-[260px] md:w-[320px] lg:w-[380px] xl:w-[420px] object-contain"
            />
          </motion.div>

          {/* TEXT CONTENT */}
          <motion.div
            variants={itemVariants}
            className="md:w-1/2 text-center md:text-left space-y-6"
          >

            {/* NAME */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                lineHeight: 1.2,
                color: "text.primary",
              }}
            >
              <span style={{ color: theme.palette.primary.main }}>Hi,</span>{" "}
              I'm{" "}
              {name.split("").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    color: [
                      theme.palette.text.primary,
                      theme.palette.primary.main,
                      theme.palette.text.primary,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.15,
                    repeat: Infinity,
                  }}
                >
                  {char}
                </motion.span>
              ))}{" "}
              👋
            </Typography>

            {/* ROLE */}
            <Typography
              variant="h4"
              sx={{
                fontWeight: 600,
                color: "text.primary",
              }}
            >
              {text.split("").map((char, index) => (
                <motion.span
                  key={index}
                  animate={{
                    color: [
                      theme.palette.text.primary,
                      theme.palette.primary.main,
                      theme.palette.text.primary,
                    ],
                  }}
                  transition={{
                    duration: 2.5,
                    delay: index * 0.15,
                    repeat: Infinity,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </Typography>

            {/* DESCRIPTION */}
            <Typography
              sx={{
                maxWidth: 600,
                color: "text.secondary",
                fontSize: "1.1rem",
              }}
            >
              Passionate about building beautiful, scalable and high-performance
              web experiences using modern technologies.
            </Typography>

            {/* TECH STACK */}
            <motion.div
              variants={chipContainer}
              initial="hidden"
              animate="show"
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                gap={1.2}
                justifyContent={{ xs: "center", md: "flex-start" }}
                sx={{ maxWidth: { xs: "100%", md: 520 } }}
              >
                {chipsData.map((chip, index) => {
                  const isHovered = hoveredIndex === index;

                  const currentVariant =
                    isHovered
                      ? chip.variant === "filled"
                        ? "outlined"
                        : "filled"
                      : chip.variant;

                  return (
                    <motion.div
                      key={index}
                      variants={chipDrop}
                      whileHover={{ scale: 1.1 }}
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      <Chip
                        label={chip.label}
                        color={chip.color}
                        variant={currentVariant}
                        sx={{ fontWeight: 500 }}
                      />
                    </motion.div>
                  );
                })}
              </Stack>
            </motion.div>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">

              <Button
                variant="contained"
                component={Link}
                to="/project"
                sx={{
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                }}
              >
                View Projects
              </Button>

              <Button
                variant="outlined"
                component="a"
                href="/prince_resume2.pdf"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  px: 3,
                  py: 1.3,
                  fontWeight: 600,
                }}
              >
                View Resume
              </Button>
              {!isMobile && (
                <motion.div
                className="fixed bottom-5 right-5"
                initial={{ opacity: 0, x: 50, y: 50 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1 }}
              >
                <Contact />
              </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/* MOBILE EXTRA SECTIONS */}
      {isMobile && (
        <div className="px-5 pb-20 space-y-16">
          <About />
          <Certificate />
          <Project />
          <Footer/>
        </div>
      )}
    </div>
  );
}