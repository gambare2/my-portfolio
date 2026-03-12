import Contact from "./Contact";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import { alpha } from "@mui/material";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";
const certifyDrive = [
  {
    fileid: "1JPRMa0HP0Zm4vNMMWaS5Cqxfl2YTkv4f",
    name: "Python in AI offer letter",
    date: "On-Going",
    course: "Edunova Technology",
  },
  {
    fileid: "1ECtUr95eL6GNraAjaiFcWbgPaWv_q63r",
    name: "Python Masterclass",
    date: "21-June, 2025",
    course: "Udemy",
  },
  {
    fileid: "19a0zKx_vuEnsV3-Ls2T33PtjIwg09jKC",
    name: "Python Certificate",
    date: "24-May, 2025",
    course: "Udemy",
  },
  {
    fileid: "1rjVGSXGA6PO69GSsO0yJN93zY-x5zVi7",
    name: "Javascript Certificate",
    date: "16-June, 2025",
    course: "Udemy",
  },
  {
    fileid: "16EvCd_1Mrk_0wYBYH52Jke2ySlIxNtTT",
    name: "MySQL Certificate",
    date: "27-Nov, 2025",
    course: "Udemy",
  },
  {
    fileid: "1j_YiuLXWivANTSqjeJ9e1smlfVe12xO4",
    name: "Numpy & Pandas Certificate",
    date: "27-Nov, 2025",
    course: "Udemy",
  },
  {
    fileid: "1PDiiLAckUcF3E1DcA2KIxDBLjdKj4nGK",
    name: "Python with OOPs",
    date: "27-Nov, 2025",
    course: "Udemy",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6 },
  }),
};

const itemVariants = {
  hidden: { opacity: 0, x: 40, y: 40 },
  visible: { opacity: 1, x: 0, y: 0 },
};

function Certificate() {
  const theme = useTheme();

  const openPDF = (fileid) => {
    window.open(`https://drive.google.com/file/d/${fileid}/view`, "_blank");
  };

  return (
    <Box
    sx={{
      position: "relative",
      minHeight: "100vh",
      px: { xs: 3, md: 8 },
      py: 8,
      backgroundColor: (theme) =>
        alpha(theme.palette.background.default, 0.7),
      color: "text.primary",
      backdropFilter: "blur(8px)",
    }}
    >
      {/* Section Title */}
      <AnimatedCodeBackground />
      <Box textAlign="center" mb={6}>
        <Typography
          variant="h4"
          fontWeight="bold"
          color="text.primary"
        >
          📜 Certifications
        </Typography>

        <Divider
          sx={{
            width: 120,
            mx: "auto",
            mt: 2,
            borderColor: theme.palette.primary.main,
          }}
        />

        <Typography
          sx={{
            mt: 2,
            maxWidth: 600,
            mx: "auto",
            color: "text.secondary",
          }}
        >
          Certifications that validate my skills across modern web
          technologies, programming, and software development.
        </Typography>
      </Box>

      {/* Certificates Grid */}

      <Grid container spacing={4} justifyContent="center">
        {certifyDrive.map(({ fileid, name, date, course }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ y: -6 }}
            >
              <Card
                sx={{
                  borderRadius: 4,
                  overflow: "hidden",
                  backdropFilter: "blur(6px)",
                  background:
                    theme.palette.mode === "dark"
                      ? "rgba(30,30,30,0.8)"
                      : "rgba(255,255,255,0.9)",
                  border:
                    theme.palette.mode === "dark"
                      ? "1px solid rgba(255,255,255,0.08)"
                      : "1px solid rgba(0,0,0,0.08)",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 8px 30px rgba(0,0,0,0.6)"
                      : "0 8px 30px rgba(0,0,0,0.1)",
                  transition: "all 0.3s ease",
                }}
                onClick={() => openPDF(fileid)}
              >
                <CardActionArea>

                  {/* Certificate Preview */}

                  <Box
                    component="iframe"
                    src={`https://drive.google.com/file/d/${fileid}/preview`}
                    sx={{
                      width: "100%",
                      height: 200,
                      border: "none",
                      backgroundColor:
                        theme.palette.mode === "dark"
                          ? "#0f172a"
                          : "#f1f5f9",
                    }}
                  />

                  {/* Certificate Info */}

                  <CardContent>

                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      color="text.primary"
                      sx={{ mb: 1 }}
                    >
                      {name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      📅 {date}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      🎓 {course}
                    </Typography>

                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Floating Contact Button */}

      <motion.div
        className="fixed bottom-5 right-5"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        <Contact />
      </motion.div>
    </Box>
  );
}

export default Certificate;