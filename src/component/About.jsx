import React from "react";
import { Box, Grid, Typography, Card, CardContent, Divider, Stack, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const techstacks = [
  { name: "JavaScript", color: "F7DF1E", logo: "javascript" },
  { name: "TypeScript", color: "3178C6", logo: "typescript" },
  { name: "React", color: "61DAFB", logo: "react" },
  { name: "Node.js", color: "339933", logo: "node.js" },
  { name: "Express", color: "000000", logo: "express" },
  { name: "MongoDB", color: "47A248", logo: "mongodb" },
  { name: "TailwindCSS", color: "38B2AC", logo: "tailwind-css" },
  { name: "Git", color: "F05032", logo: "git" },
  { name: "Zustand", color: "000000", logo: "zustand" },
  { name: "Material UI", color: "007FFF", logo: "mui" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const name = "Prince Aryan Singh";
const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"]

function About() {
  return (
    <Box sx={{ px: { xs: 3, md: 8 }, py: { xs: 6, md: 10 }, }}>
      {/* Intro Section */}
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6} component={motion.div} initial="hidden" animate="visible" variants={fadeUp}>
          <Typography variant="h3" fontWeight="bold" color="primary" gutterBottom>
            👋 Hi there!
          </Typography>
          <Typography variant="h4" fontWeight="bold" color="white">
            I’m{" "}
            <motion.span style={{ display: "inline-block" }}>
              {name.split("").map((char, index) => {
                const displayChar = char === " " ? "\u00A0" : char;
                return (
                  <motion.span
                    key={index}
                    style={{ display: "inline-block" }}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1, color: colors[index % colors.length] }}
                    transition={{ delay: index * 0.08, type: "spring", stiffness: 300 }}
                  >
                    {displayChar}
                  </motion.span>
                );
              })}
            </motion.span>
          </Typography>
          <Typography variant="h6" color="white" gutterBottom>
            💻 MERN Stack Developer | 📍 India
          </Typography>
          <Typography variant="body1" color="white" gutterBottom>
            📧 Reach me at: available in contact section
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} component={motion.div} initial="hidden" animate="visible" variants={fadeUp}>
          <Avatar
            src="profile_pic.jpg"
            alt="Prince Aryan Singh"
            sx={{ width: 300, height: 300, mx: { xs: "auto", md: "0" }, border: "4px solid", borderColor: "primary.main" }}
          />
        </Grid>
      </Grid>

      {/* Tech Stack */}
      <Box sx={{ mt: 8 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          🧰 Tech Stack
        </Typography>
        <Divider sx={{ width: 120, mx: "auto", mb: 4, borderColor: "primary.main" }} />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
          {techstacks.map((tech) => (
            <motion.img
              key={tech.name}
              src={`https://img.shields.io/badge/-${encodeURIComponent(tech.name)}-${tech.color}?style=flat-square&logo=${tech.logo}&logoColor=white`}
              alt={tech.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{ cursor: "pointer" }}
            />
          ))}
        </Stack>
      </Box>

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
            src="https://github-readme-stats.vercel.app/api?username=gambare2&show_icons=true&theme=github_dark"
            alt="GitHub Stats"
            whileHover={{ scale: 1.02 }}
            style={{ borderRadius: 12 }}
          />
          <motion.img
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=gambare2&layout=compact&theme=github_dark"
            alt="Top Languages"
            whileHover={{ scale: 1.02 }}
            style={{ borderRadius: 12 }}
          />
        </Stack>
      </Box>

      <Typography variant="h5" color="secondary" align="center" sx={{ mt: 10 }}>
        ⭐️ Thanks for visiting! ⭐️
      </Typography>
    </Box>
  );
}

export default About;
