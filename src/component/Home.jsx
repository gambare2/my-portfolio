import { Link } from 'react-router'
import { Box, Grid, Typography, Chip, Stack, Button } from "@mui/material";
import { motion } from "framer-motion"
import Contact from  "./Contact"

const text = "Developer";

const contactCard = [
  { link: "https://www.instagram.com/thakur_aryan864/", name: "Instagram", logo: "instagram.svg" },
  { link: "https://www.facebook.com/princearyan.singh.161", name: "Facebook", logo: "facebook.png" },
  { link: "https://github.com/gambare2", name: "Github", logo: "github.svg" },
  { link: "https://x.com/aryan2645?t=gNkydbsN86BgxFataQqqew&s=09", name: "Twitter/X", logo: "twitter.svg" },
  { link: "https://www.threads.com/@thakur_aryan864", name: "Threads", logo: "threads.svg" },
  { link: "mailto:sprincearyan384@gmail.com", name: "G-mail", logo: "gmail.svg" },
  { link: "tel:+916207535637", name: "Phone no.", logo: "phone.png" },
];

function Home() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-4 md:p-8">
      
      <img
        src="profile_pic.jpg"
        alt="Full image"
        className="w-10/12 md:w-5/12 mb-6 md:mb-0 rounded-xl shadow-md"
      />

      <div className="flex flex-col justify-center md:ml-10 text-center md:text-left">
        <Grid item xs={12} md={7}>
          <Box sx={{ textAlign: { xs: "center", md: "left" }, mb: 1 }}>
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

          <Typography
            variant="h5"
            sx={{
              color: "text.secondary",
              mb: 3,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Passionate about building beautiful & performant web experiences.
          </Typography>
          <div className='flex justify-center'>
            <Stack
              direction="row"
              flexWrap="wrap"
              justifyContent={{ xs: "center", md: "flex-start" }}
              gap={1.5}
              sx={{ mb: 4 }}
            >
              <Chip label="JavaScript" color="warning" variant="filled" />
              <Chip label="TypeScript" color="primary" variant="filled" />
              <Chip label="Node.js" color="success" variant="filled" />
              <Chip label="React.js" color="info" variant="filled" />
              <Chip label="React Native" color="secondary" variant="filled" />
              <Chip label="Material UI" color="error" variant="filled" />
              <Chip label="Zustand" color="default" variant="filled" sx={{color: "white",}} />
              <Chip label="Express" color="success" variant="outlined" />
              <Chip label="Firebase" color="warning" variant="outlined" />
              <Chip label="Tailwind CSS" color="info" variant="outlined" />
              <Chip label="MongoDB" color="success" variant="outlined" />
              <Chip label="Next.js" color="primary" variant="outlined" />
            </Stack>
          </div>
          <div className='flex justify-center'>
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

        </Grid>
      </div>
      <div className='fixed bottom-0 right-0'>
        <Contact/>
      </div>
    </div>
  );
}


export default Home
