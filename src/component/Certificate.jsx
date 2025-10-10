import React from "react";
import { Box, Grid, Card, CardActionArea, CardContent, Typography } from "@mui/material";
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
  hover: { scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.15)" },
};

function Certificate() {
  const openPDF = (fileid) => {
    window.open(`https://drive.google.com/file/d/${fileid}/view`, "_blank");
  };

  return (
    <Box sx={{ px: { xs: 2, md: 6 }, py: 6 }}>
      <Grid container spacing={4}>
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
                    }}
                  />

                  {/* Text content */}
                  <CardContent>
                    <Typography
                      variant="h6"
                      component="h3"
                      sx={{ fontWeight: "bold", mb: 1, textAlign: "center" }}
                    >
                      {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      📅 Date: {date}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      🎓 Course: {course}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Certificate;
