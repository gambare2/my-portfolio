import React from "react";
import { Box, Typography, IconButton, Stack } from "@mui/material";
import { GitHub, Instagram, Facebook, Email, Phone } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();

  return (
    <Box
    sx={{
        mt: 10,
        py: 4,
        px: 2,
        textAlign: "center",
      
        // 🔥 Improved background
        background:
          "black",
      
        color: theme.palette.text.primary,
        boxShadow:
          theme.palette.mode === "dark"
            ? "0 -2px 20px rgba(255,255,255,0.05)"
            : "0 -2px 20px rgba(0,0,0,0.05)",
      
        borderTop: `1px solid ${theme.palette.divider}`,
      }}
    >
      {/* Name */}


      {/* Subtitle */}
      <Typography
        variant="body2"
        sx={{ mb: 2, color: theme.palette.text.primary }}
      >
        Frontend Developer | React | AI Enthusiast
      </Typography>

      {/* Social Icons */}
      <Stack direction="row" spacing={2} justifyContent="center" mb={2}>
        <IconButton
          component="a"
          href="https://github.com/gambare2"
          target="_blank"
          sx={{ color: theme.palette.text.primary }}
        >
          <GitHub />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.instagram.com/thakur_aryan864/"
          target="_blank"
          sx={{ color: theme.palette.text.primary }}
        >
          <Instagram />
        </IconButton>

        <IconButton
          component="a"
          href="https://www.facebook.com/princearyan.singh.161"
          target="_blank"
          sx={{ color: theme.palette.text.primary }}
        >
          <Facebook />
        </IconButton>

        <IconButton
          component="a"
          href="mailto:sprincearyan384@gmail.com"
          sx={{ color: theme.palette.text.primary }}
        >
          <Email />
        </IconButton>

        <IconButton
          component="a"
          href="tel:+916207535637"
          sx={{ color: theme.palette.text.primary }}
        >
          <Phone />
        </IconButton>
      </Stack>

      {/* Copyright */}
      <Typography
        variant="caption"
        sx={{ color: theme.palette.text.secondary }}
      >
        © {new Date().getFullYear()} Aryan Singh. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;