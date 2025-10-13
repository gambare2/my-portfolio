import Contact from "./Contact";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";


const certifyDrive = [
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
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
  hover: { scale: 1.03 },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function Certificate() {
  const theme = useTheme();

  const openPDF = (fileid) => {
    window.open(`https://drive.google.com/file/d/${fileid}/view`, "_blank");
  };

  return (
    <Box
      sx={{
        px: { xs: 2, md: 6 },
        py: 6,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <Typography
        variant="h4"
        align="center"
        fontWeight="bold"
        sx={{
          mb: 5,
          color: theme.palette.text.primary,
          borderBottom: `3px solid ${theme.palette.primary.main}`,
          display: "inline-block",
          px: 3,
        }}
      >
        📜 Certificates
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {certifyDrive.map(({ fileid, name, date, course }, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              custom={index}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              variants={cardVariants}
            >
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? theme.palette.background.paper
                      : "#ffffff",
                  boxShadow:
                    theme.palette.mode === "dark"
                      ? "0 4px 20px rgba(255,255,255,0.05)"
                      : "0 4px 20px rgba(0,0,0,0.1)",
                  "&:hover": {
                    boxShadow:
                      theme.palette.mode === "dark"
                        ? "0 8px 24px rgba(255,255,255,0.1)"
                        : "0 8px 24px rgba(0,0,0,0.15)",
                  },
                  transition: "all 0.3s ease",
                }}
                onClick={() => openPDF(fileid)}
              >
                <CardActionArea>
                  {/* PDF preview */}
                  <Box
                    component="iframe"
                    src={`https://drive.google.com/file/d/${fileid}/preview?rm=minimal`}
                    sx={{
                      width: "100%",
                      height: 200,
                      border: "none",
                      backgroundColor:
                        theme.palette.mode === "dark" ? "#111" : "#f0f0f0",
                    }}
                  />

                  {/* Text content */}
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{
                        fontWeight: "bold",
                        mb: 1,
                        textAlign: "center",
                        color: theme.palette.text.primary,
                      }}
                    >
                      {name}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      📅 Date: {date}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: theme.palette.text.secondary }}
                    >
                      🎓 Course: {course}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
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

export default Certificate;
