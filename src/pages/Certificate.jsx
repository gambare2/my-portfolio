import { useState } from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  useTheme,
  Divider,
  Modal,
  useMediaQuery,
  Stack,
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
      }} id="certificate"
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
      <div className="relative overflow-hidden py-10">
        <motion.div
          className="flex gap-8 w-max"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 40,
            ease: "linear",
          }}
        >
          {[...certifyDrive, ...certifyDrive].map((item, index) => (
            <motion.div
              key={index}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
            >
              <Card
                sx={{
                  width: 350,
                  borderRadius: "24px",
                  overflow: "hidden",
                  backdropFilter: "blur(20px)",
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                }}
              >
                <CardActionArea
                  onClick={() => openFull(item.fileid)}
                >
                  <Box
                    component="img"
                    src={`https://drive.google.com/thumbnail?id=${item.fileid}&sz=w1000`}
                    sx={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                    }}
                  />

                  <CardContent>
                    <Typography
                      fontWeight="bold"
                      fontSize="1.1rem"
                    >
                      {item.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {item.course}
                    </Typography>

                    <Typography
                      variant="caption"
                      color="text.secondary"
                    >
                      {item.date}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

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
    </Box>
  );
}

export default Certificate;