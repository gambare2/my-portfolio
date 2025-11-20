import { Link } from "react-router";
import { Box, Grid, Typography, Chip, Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import Contact from "./Contact";
import { useState } from "react";

const text = "Developer";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delayChildren: 0.2, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
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

const chipsData = [
  { label: "JavaScript", color: "warning", variant: "filled" },
  { label: "TypeScript", color: "primary", variant: "filled" },
  { label: "Node.js", color: "success", variant: "filled" },
  { label: "React.js", color: "info", variant: "filled" },
  { label: "React Native", color: "secondary", variant: "filled" },
  { label: "Material UI", color: "error", variant: "filled" },
  { label: "Zustand", color: "default", variant: "filled"},
  { label: "Express", color: "success", variant: "outlined" },
  { label: "Firebase", color: "warning", variant: "outlined" },
  { label: "Tailwind CSS", color: "info", variant: "outlined" },
  { label: "MongoDB", color: "success", variant: "outlined" },
  { label: "Next.js", color: "primary", variant: "outlined" },
  { label: "Git", color: "secondary", variant: "outlined"},
  { label: "GitHub", color: "default", variant: "outlined"},
];

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      {/* 👤 Profile Image */}
      <motion.img
        src="profile-banner.jpeg"
        alt="Full image"
        className="w-11/12 h-full mb-6 md:mb-0 rounded-2xl shadow-md"
        variants={itemVariants}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 200 }}
      />
      <motion.div
        className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        {/* 🧠 Text Section */}
        <motion.div
          className="flex flex-col justify-center md:ml-10 text-center md:text-left"
          variants={itemVariants}
        >
          <Grid item xs={12} md={7}>
            <Box sx={{ textAlign: { xs: "center", md: "center" }, mb: 1 }}>
              <Typography
                variant="h3"
                component="h1"
                sx={{ fontWeight: "bold", display: "inline" }}
              >
                <Typography
                  component="span"
                  variant="h3"
                  sx={{ color: "primary.main", fontWeight: "bold" }}
                >
                  Hii,
                </Typography>{" "}
                I’m a{" "}
              </Typography>

              {/* ✨ Animated "Developer" word */}
              <motion.span
                style={{
                  display: "inline-block",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  fontSize: "2.5rem",
                }}
              >
                {text.split("").map((char, index) => (
                  <motion.span
                    key={index}
                    initial={{ color: "#000" }}
                    animate={{ color: ["#000", "#1976d2", "#000"] }}
                    transition={{
                      duration: 2.5,
                      delay: index * 0.15,
                      repeat: Infinity,
                      repeatDelay: text.length * 0.15,
                    }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.span>
            </Box>

            <motion.div variants={itemVariants}>
              <Typography
                variant="h5"
                sx={{
                  color: "text.secondary",
                  mb: 3,
                  textAlign: { xs: "center", md: "center" },
                }}
              >
                Passionate about building beautiful & performant web experiences.
              </Typography>
            </motion.div>

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
                sx={{ mb: 4 , cursor: "pointer"}}
                
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

            <motion.div variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 250 }}>
              <div className="flex justify-center">
                <Button
                  variant="outlined"
                  color="secondary"
                  size="medium"
                  component={Link}
                  to="/project"
                  sx={{
                    textTransform: "none",
                    borderRadius: 2,
                    px: 4,
                    py: 1.2,
                    fontSize: "0.95rem",
                    display: "block",
                    mx: { xs: "auto", md: "0" },
                    maxWidth: 220,
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "secondary.main",
                      color: "white",
                      boxShadow: 3,
                    },
                  }}
                >
                  View My Projects 🚀
                </Button>
                



                
              </div>
            </motion.div>
          </Grid>
        </motion.div>

        {/* 📞 Contact Icon Set */}
        <motion.div
          className="fixed bottom-0 right-0"
          variants={itemVariants}
          initial={{ opacity: 0, x: 50, y: 50 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <Contact />
        </motion.div>
      </motion.div>
    </div>
  );
}
