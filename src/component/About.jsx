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
import Project from "./Project";
import Certificate from "./Certificate";
import { useState } from "react";

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

const techstacks = [
  { name: "JavaScript", color: "F7DF1E", logo: "javascript" },
  { name: "Python", color: "3776AB", logo: "python" },
  { name: "React.js", color: "61DAFB", logo: "react" },
  { name: "Node.js", color: "339933", logo: "node.js" },
  { name: "Express.js", color: "000000", logo: "express" },
  { name: "Tailwind CSS", color: "38B2AC", logo: "tailwind-css" },
  { name: "MongoDB", color: "47A248", logo: "mongodb" },
  { name: "Material UI", color: "007FFF", logo: "mui" },
  { name: "Git", color: "F05032", logo: "git" },
];

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const name = "Prince Aryan Singh";
const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

function About() {
  const theme = useTheme();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      sx={{
        px: { xs: 3, md: 8 },
        py: { xs: 6, md: 10 },
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      {/* Intro Section */}
      <Grid container spacing={6} alignItems="center">
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
          <Typography variant="h6" color="text.secondary" gutterBottom>
            💻 Full Stack Developer
          </Typography>
          <Typography variant="h6" color="text.secondary" gutterBottom>
            📍 Uttar Pradesh, India
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            A passionate developer who loves building user-friendly, scalable, and creative
            digital experiences. I thrive on transforming ideas into impactful products that
            make a difference.
          </Typography>

          <Typography variant="body1" color="text.secondary">
            💬 Open to collaborating on innovative projects and always eager to explore more on
            <strong> MERN Stack Development</strong> and emerging technologies.
          </Typography>
        </Grid>

        <Grid
          item
          xs={12}
          md={6}
          component={motion.div}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
        </Grid>
      </Grid>


      {/* Experience Section */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          🏢 Professional Experience
        </Typography>
        <Divider
          sx={{
            width: 150,
            mx: "auto",
            mb: 4,
            borderColor: "primary.main",
          }}
        />

        {/* Use flex layout for consistent width & wrapping */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 5,
            cursor: "pointer"

          }}
        >
          {[
            {
              role: "Full Stack Developer (Intern)",
              company: "Technohacks",
              period: "May 2024",
              desc: "Worked on real-world development projects and learned professional software practices.",
            },
            {
              role: "Full Stack Developer",
              company: "Adsource IT Solution",
              period: "Present",
              desc: "Contributing to live production projects, improving backend logic, and enhancing user interfaces using React, Node.js, and MongoDB.",
            },
          ].map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              whileHover={{ scale: 1.1 }}
              viewport={{ once: true }}
              style={{
                flex: "1 1 350px", // min width per card, expands evenly
                maxWidth: "500px",
                display: "flex",
              }}
            >
              <Card
                sx={{
                  flex: 1,
                  backgroundColor: theme.palette.background.paper,
                  borderRadius: 3,
                  boxShadow: 3,
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <CardContent>
                  <Typography variant="h6" fontWeight="bold">
                    {exp.role}
                  </Typography>
                  <Typography color="primary" sx={{ fontWeight: 500 }}>
                    {exp.company} — {exp.period}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mt: 1 }}>
                    {exp.desc}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>

      {/* Education */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          🎓 Education
        </Typography>
        <Divider sx={{ width: 120, mx: "auto", mb: 4, borderColor: "primary.main" }} />
        <Typography align="center" color="text.secondary" variant="h6">
          B.E. in Computer Science & Engineering —{" "}
          <strong>Institute Of Engineering and Technology, Agra</strong>
        </Typography>
        <Typography align="center" color="text.secondary" variant="h6">
          AI/ML Course  —{" "}
          <strong>Edunova Technology, Delhi</strong>
        </Typography>
      </Box>

      {/* Tech Stack */}
      {!isMobile &&  (
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          🧰 Tech Stack
        </Typography>
        <Divider sx={{ width: 170, mx: "auto", mb: 4, borderColor: "primary.main" }} />
        <motion.div
          variants={containerVariants2}
          initial="hidden"
          animate="show"
          className="flex justify-center"
        >
          <Stack
            direction="row"
            flexWrap="wrap"
            justifyContent={{ xs: "center", md: "flex-start" }}
            gap={1.5}
            sx={{ mb: 4, cursor: "pointer" }}

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
                  initial="hidden"
                  animate="show"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 250 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Chip
                    label={chip.label}
                    color={chip.color}
                    variant={currentVariant}
                    sx={{
                      fontWeight: 500,
                      px: 1.5,
                      transition: "all 0.3s ease",
                      ...(chip.sx || {}),
                    }}
                  />
                </motion.div>
              );
            })}
          </Stack>
        </motion.div>
      </Box>
      )}

      {/* GitHub Stats */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          📊 GitHub Stats
        </Typography>
        <Divider sx={{ width: 120, mx: "auto", mb: 4, borderColor: "primary.main" }} />
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
            whileHover={{ scale: 1.02 }}
            style={{ borderRadius: 12 }}
          />
          <motion.img
            src={`https://github-readme-stats.vercel.app/api/top-langs/?username=gambare2&layout=compact&theme=${theme.palette.mode === "dark" ? "github_dark" : "default"
              }`}
            alt="Top Languages"
            whileHover={{ scale: 1.02 }}
            style={{ borderRadius: 12 }}
          />
        </Stack>
      </Box>

      {/* Footer */}
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        sx={{ mt: 10 }}
      >
        ⭐ Thanks for visiting! Let’s connect on{" "}
        <a
          href="https://www.linkedin.com/in/prince-aryan-singh-857771257/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: theme.palette.primary.main, textDecoration: "none" }}
        >
          LinkedIn
        </a>{" "}
        ⭐
      </Typography>
      <motion.div
        className="fixed bottom-0 right-0"
        variants={itemVariants}
        initial={{ opacity: 0, x: 50, y: 50 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <Contact />
      </motion.div>

    </Box>
  );
}

export default About;
