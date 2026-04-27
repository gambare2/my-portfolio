import Contact from "./Contact";
import { useState } from "react";
import {
  Box,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  Divider,
  Modal,
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
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
  const [selected, setSelected] = useState(null);
  const isMobile = useMediaQuery("(max-width:768px)");
  const openFull = (fileid) => {
    setSelected(fileid);
  };

  const closeFull = () => setSelected(null);

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        px: { xs: 2, md: 8 },
        py: 8,
        background:
          theme.palette.mode === "dark"
            ? "#020617"
            : "#f8fafc",
        color: theme.palette.text.primary,
      }}
    >
      {/* Background (desktop only) */}
      {!isMobile && typeof window !== "undefined" && window.innerWidth > 768 && (
        <AnimatedCodeBackground />
      )}
      {/* Header */}
      <Box textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold">
          Certifications
        </Typography>

        <Divider
          sx={{
            width: 100,
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
          Certifications validating skills across development and programming.
        </Typography>
      </Box>

      {/* Grid */}
      <Grid container spacing={4} justifyContent="center">
        {certifyDrive.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card
                sx={{
                  borderRadius: 3,
                  overflow: "hidden",
                  background:
                    theme.palette.mode === "dark"
                      ? "#0f172a"
                      : "#ffffff",
                  border: "1px solid rgba(255,255,255,0.08)",
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
                  },
                }}
              >
                <CardActionArea onClick={() => openFull(item.fileid)}>
                  {/* Sharp Image Preview */}
                  <Box
                    component="img"
                    src={`https://drive.google.com/thumbnail?id=${item.fileid}&sz=w1000`}
                    sx={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      backgroundColor: "#111",
                    }}
                  />

                  <CardContent>
                    <Typography fontWeight="bold">
                      {item.name}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.date}
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                      {item.course}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Modal Preview */}
      <Modal open={!!selected} onClose={closeFull}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "90%",
            height: "90%",
            bgcolor: "#000",
            borderRadius: 2,
            overflow: "hidden",
          }}
        >
          {selected && (
            <iframe
              src={`https://drive.google.com/file/d/${selected}/preview`}
              width="100%"
              height="100%"
              style={{ border: "none" }}
            />
          )}
        </Box>
      </Modal>

      {/* Floating Contact */}
      <motion.div
        className="fixed bottom-5 right-5"
        initial={{ opacity: 0, x: 40, y: 40 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Contact />
      </motion.div>
    </Box>
  );
}

export default Certificate;