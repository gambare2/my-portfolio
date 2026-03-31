import {
  Box,
  Grid,
  Typography,
  Divider,
  Stack,
  useTheme,
  Card,
  CardContent,
  useMediaQuery,
  Chip,
} from "@mui/material";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { useState } from "react";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

const containerVariants2 = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // delay between chips
      delayChildren: 0.4,
    },
  },
};

const chipDropVariants = {
  hidden: { y: -100, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15, // controls bounce
    },
  },
};

const name = "Prince Aryan Singh";
const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

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

const experiences = [
  {
    role: "Full Stack Developer Intern",
    company: "Technohacks",
    period: "May 2024",
    desc: "Worked on real-world development projects and improved frontend UI experiences.",
  },
  {
    role: "Full Stack Developer",
    company: "Adsource IT Solution",
    period: "July 2025 – January 2026",
    desc: "Built production MERN applications, optimized backend APIs and enhanced UI performance.",
  },
];

const education = [
  {
    role: "B.Tech in Computer Science and Engineering",
    company: "Dr. Bhimrao Ambedkar University Agra",
    period: "2022 - 2026",
    desc: "Currently pursuing a Bachelor of Technology in Computer Science and Engineering at Dr. Bhimrao Ambedkar University Agra.",
    percentage: "6.7 CGPA",
  },
  {
    role: "A.I in python",
    company: "Edunova Technology",
    period: "July 2025 - On-Going",
    desc: "Currently pursuing a course on A.I in python from Edunova Technology.",
    percentage: "90%",
  },
];
function About() {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <Box sx={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>

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
        {/* Intro */}
        <Grid container spacing={6}>
          <Grid
            item
            xs={12}
            md={6}
            component={motion.div}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
          >
            {/* Combined line for greeting + name for desktop */}
            {!isMobile && (
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: "#10B981" }}
                >
                  Hi, I’m
                </motion.span>

                {/* Animated Name */}
                <motion.span
                  style={{ display: "inline-flex", flexWrap: "wrap" }}
                >
                  {name.split("").map((char, index) => {
                    const displayChar = char === " " ? "\u00A0" : char;
                    return (
                      <motion.span
                        key={index}
                        style={{
                          display: "inline-block",
                          fontWeight: "bold",
                          color: colors[index % colors.length],
                        }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                          delay: index * 0.06,
                          type: "spring",
                          stiffness: 250,
                        }}
                      >
                        {displayChar}
                      </motion.span>
                    );
                  })}
                </motion.span>
              </Typography>
            )}
            {/* Combined line for greeting + name for mobile */}
            {isMobile && (
              <Typography
                variant="h3"
                fontWeight="bold"
                gutterBottom
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{ color: "#10B981" }}
                >
                  Introduction
                </motion.span>
              </Typography>

            )}
            {isMobile && (
              <div>
                <Divider
                  sx={{
                    width: 300,
                    mx: "auto",
                    mb: 4,
                    borderColor: "primary.main",
                  }}
                />
              </div>
            )}
            <Typography variant="h6" color="text.primary" gutterBottom>
              💻 Full Stack Developer
            </Typography>
            <Typography variant="h6" color="text.primary" gutterBottom>
              📍 Uttar Pradesh, India
            </Typography>
            <Typography variant="body1" color="text.primary" paragraph>
              A passionate developer who loves building user-friendly, scalable, and creative
              digital experiences. I thrive on transforming ideas into impactful products that
              make a difference.
            </Typography>

            <Typography variant="body1" color="text.primary">
              💬 Open to collaborating on innovative projects and always eager to explore more on
              <strong> MERN Stack Development</strong> and emerging technologies.
            </Typography>
          </Grid>
        </Grid>

        {/* Education */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="text.primary"
          >
            Education
          </Typography>

          <Divider sx={{ width: 140, mx: "auto", mt: 2, mb: 6 }} />

          <Box
            sx={{
              position: "relative",
              maxWidth: 900,
              mx: "auto",
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Timeline line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 20, md: "50%" },
                transform: { md: "translateX(-50%)" },
                width: 4,
                height: "100%",
                background: theme.palette.primary.main,
              }}
            />

            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      md: index % 2 === 0 ? "flex-start" : "flex-end",
                    },
                    mb: 6,
                  }}
                >
                  <Card
                    sx={{
                      width: { xs: "100%", md: "45%" },
                      ml: { xs: 6, md: 0 },
                      backgroundColor: theme.palette.background.paper,
                      boxShadow: 3,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="text.primary"
                      >
                        {edu.role}
                      </Typography>

                      <Typography color="primary">
                        {edu.company}
                      </Typography>

                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        {edu.period}
                      </Typography>

                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        {edu.percentage}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {edu.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>
        {/* Timeline Experience */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="text.primary"
          >
            💼 Experience
          </Typography>

          <Divider sx={{ width: 140, mx: "auto", mt: 2, mb: 6 }} />

          <Box
            sx={{
              position: "relative",
              maxWidth: 900,
              mx: "auto",
              px: { xs: 2, md: 0 },
            }}
          >
            {/* Timeline line */}
            <Box
              sx={{
                position: "absolute",
                left: { xs: 20, md: "50%" },
                transform: { md: "translateX(-50%)" },
                width: 4,
                height: "100%",
                background: theme.palette.primary.main,
              }}
            />

            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: {
                      xs: "flex-start",
                      md: index % 2 === 0 ? "flex-start" : "flex-end",
                    },
                    mb: 6,
                  }}
                >
                  <Card
                    sx={{
                      width: { xs: "100%", md: "45%" },
                      ml: { xs: 6, md: 0 },
                      backgroundColor: theme.palette.background.paper,
                      boxShadow: 3,
                      borderRadius: 3,
                    }}
                  >
                    <CardContent>
                      <Typography
                        variant="h6"
                        fontWeight="bold"
                        color="text.primary"
                      >
                        {exp.role}
                      </Typography>

                      <Typography color="primary">
                        {exp.company}
                      </Typography>

                      <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                        {exp.period}
                      </Typography>

                      <Typography color="text.secondary" sx={{ mt: 1 }}>
                        {exp.desc}
                      </Typography>
                    </CardContent>
                  </Card>
                </Box>
              </motion.div>
            ))}
          </Box>
        </Box>

        {/* Tech Stack */}
        {/* {!isMobile && (
          <Box sx={{ mt: 10 }}>
            <Typography
              variant="h4"
              fontWeight="bold"
              align="center"
              color="text.primary"
            >
              🧰 Tech Stack
            </Typography>

            <Divider sx={{ width: 150, mx: "auto", mt: 2, mb: 5 }} />

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
            >
              <Stack
                direction="row"
                flexWrap="wrap"
                justifyContent="center"
                gap={1.5}
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
                      variants={chipDropVariants}
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
          </Box>
        )} */}

        {/* GitHub Stats */}
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            color="text.primary"
          >
            📊 GitHub Stats
          </Typography>

          <Divider sx={{ width: 120, mx: "auto", mt: 2, mb: 4 }} />

          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            justifyContent="center"
            alignItems="center"
          >
            <motion.img
              src={`https://github-readme-stats.vercel.app/api?username=gambare2&show_icons=true&theme=${theme.palette.mode === "dark" ? "github_dark" : "default"
                }`}
              alt="GitHub Stats"
              whileHover={{ scale: 1.05 }}
              style={{ borderRadius: 12 }}
            />

            <motion.img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=gambare2&layout=compact&theme=${theme.palette.mode === "dark" ? "github_dark" : "default"
                }`}
              alt="Top Languages"
              whileHover={{ scale: 1.05 }}
              style={{ borderRadius: 12 }}
            />
          </Stack>
        </Box>

        {/* Footer */}
        <Typography
          variant="h6"
          align="center"
          color="text.primary"
          sx={{ mt: 10 }}
        >
          ⭐ Thanks for visiting! Let’s connect on{" "}
          <a
            href="https://www.linkedin.com/in/prince-aryan-singh-857771257/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.palette.primary.main,
              textDecoration: "none",
            }}
          >
            LinkedIn
          </a>{" "}
          ⭐
        </Typography>

        {/* Floating Contact */}
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
      </Box>
    </Box>
  );
}

export default About;