import React from "react";
import {
  Box,
  Grid,
  Typography,
  Divider,
  Stack,
  Avatar,
  useTheme,
  Card,
  CardContent,
  List,
  ListItem,
} from "@mui/material";
import { motion } from "framer-motion";

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

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const name = "Prince Aryan Singh";
const colors = ["#EF4444", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

function About() {
  const theme = useTheme();

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
          {/* Combined line for greeting + name */}
          <Typography
            variant="h3"
            fontWeight="bold"
            gutterBottom
            sx={{
              display: "flex",
              alignItems: "center",
              flexWrap: "wrap", // makes it responsive
              gap: 1,
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{ color: "#10B981" }}
            >
              🚀 Hi, I’m
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

          <Typography variant="h6" color="text.secondary" gutterBottom>
            💻 Full Stack Developer | 📍 India
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
            gap: 3,
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
          <strong>Institute Of Engineering, Agra</strong>
        </Typography>
        <Typography align="center" color="text.secondary" variant="h6">
          AI/ML Course  —{" "}
          <strong>Edunova Technology, Delhi</strong>
        </Typography>
      </Box>

      {/* Tech Stack */}
      <Box sx={{ mt: 10 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          🧰 Tech Stack
        </Typography>
        <Divider sx={{ width: 120, mx: "auto", mb: 4, borderColor: "primary.main" }} />
        <Stack direction="row" flexWrap="wrap" justifyContent="center" spacing={2}>
          {techstacks.map((tech) => (
            <motion.img
              key={tech.name}
              src={`https://img.shields.io/badge/-${encodeURIComponent(
                tech.name
              )}-${tech.color}?style=flat-square&logo=${tech.logo}&logoColor=white`}
              alt={tech.name}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                cursor: "pointer",
                filter:
                  theme.palette.mode === "light"
                    ? "drop-shadow(0px 2px 4px rgba(0,0,0,0.1))"
                    : "drop-shadow(0px 2px 6px rgba(255,255,255,0.1))",
              }}
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
    </Box>
  );
}

export default About;
