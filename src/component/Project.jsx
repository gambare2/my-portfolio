import { motion } from "framer-motion";
import projects from "../data/project.json";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Chip,
  Stack,
  useTheme,
} from "@mui/material";
import Contact from "./Contact";

// Parent container animation (controls staggering)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

// Individual card animation (drop-in + bounce)
const cardVariants = {
  hidden: { y: 50, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Project() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 8,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{
          mb: 6,
          fontWeight: "bold",
          color: theme.palette.text.primary,
          borderBottom: `3px solid ${theme.palette.primary.main}`,
          display: "inline-block",
          px: 3,
        }}
      >
        🚀 Projects
      </Typography>

      {/* Animated Container */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        <Grid container spacing={4} maxWidth="lg" mx="auto">
          {projects.length > 0 ? (
            projects.map((project, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div variants={cardVariants}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 3,
                      bgcolor:
                        theme.palette.mode === "dark"
                          ? theme.palette.background.paper
                          : "#ffffff",
                      boxShadow:
                        theme.palette.mode === "dark"
                          ? "0 4px 20px rgba(255,255,255,0.05)"
                          : "0 4px 20px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow:
                          theme.palette.mode === "dark"
                            ? "0 8px 24px rgba(255,255,255,0.1)"
                            : "0 8px 24px rgba(0,0,0,0.15)",
                        transform: "translateY(-5px)",
                      },
                    }}
                  >
                    <CardActionArea
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{ height: "100%" }}
                    >
                      <CardMedia
                        component="img"
                        image={project.image}
                        alt={project.name}
                        sx={{
                          height: 180,
                          objectFit: "cover",
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                          backgroundColor:
                            theme.palette.mode === "dark"
                              ? "#111"
                              : "#f0f0f0",
                        }}
                      />
                      <CardContent>
                        <Typography
                          gutterBottom
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight: "bold",
                            color: theme.palette.text.primary,
                          }}
                        >
                          {project.name}
                        </Typography>
                        {project.description && (
                          <Typography
                            variant="body2"
                            sx={{ mb: 2, color: theme.palette.text.secondary }}
                          >
                            {project.description}
                          </Typography>
                        )}
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                          spacing={1}
                          flexWrap="wrap"
                        >
                          <Chip
                            label={`Framework: ${project.framework}`}
                            size="small"
                            color="primary"
                            variant="outlined"
                          />
                          <Typography
                            variant="caption"
                            sx={{
                              fontStyle: "italic",
                              color: theme.palette.text.secondary,
                            }}
                          >
                            📅 {project.createdAt}
                          </Typography>
                        </Stack>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))
          ) : (
            <Grid item xs={12}>
              <Typography
                align="center"
                sx={{ color: theme.palette.text.secondary }}
                variant="body1"
              >
                No projects found.
              </Typography>
            </Grid>
          )}
        </Grid>
      </motion.div>
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

export default Project;
