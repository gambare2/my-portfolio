import React, { useState } from "react";
import { Box, Avatar } from "@mui/material";
import { motion } from "framer-motion";

const contactCard = [
  { link: "https://www.instagram.com/thakur_aryan864/", name: "Instagram", logo: "instagram.svg" },
  { link: "https://www.facebook.com/princearyan.singh.161", name: "Facebook", logo: "facebook.png" },
  { link: "https://github.com/gambare2", name: "Github", logo: "github.svg" },
  { link: "https://x.com/aryan2645?t=gNkydbsN86BgxFataQqqew&s=09", name: "Twitter/X", logo: "twitter.svg" },
  { link: "mailto:sprincearyan384@gmail.com", name: "Gmail", logo: "gmail.svg" },
  { link: "tel:+916207535637", name: "Phone", logo: "phone.png" },
];

export default function ContactOrbitLeft() {
  const [active, setActive] = useState(false);
  const radius = 130; // distance from center

  const openContact = (link) => window.open(link, "_blank");

  return (
    <Box
      sx={{
        position: "relative",
        width: 150,
        height: 350,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 8,
      }}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      {/* Central circle */}
      <motion.div
        whileTap={{ scale: 0.95 }}
        style={{
          width: 90,
          height: 90,
          borderRadius: "50%",
          backgroundColor: "#2563eb",
          color: "#fff",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontWeight: 600,
          fontSize: 15,
          cursor: "pointer",
          boxShadow: "0px 8px 20px rgba(0,0,0,0.3)",
          position: "relative",
          zIndex: 5,
        }}
      >
        Contacts
      </motion.div>

      {/* Contact icons on left arc */}
      {contactCard.map((contact, i) => {
        const angle = (i / (contactCard.length - 1)) * Math.PI - Math.PI / 2;
        const x = active ? -radius * Math.cos(angle) : 0;
        const y = active ? radius * Math.sin(angle) : 0;

        return (
          <motion.div
            key={i}
            initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
            animate={{
              x,
              y,
              scale: active ? 1 : 0,
              opacity: active ? 1 : 0,
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 18,
              delay: active ? i * 0.1 : 0,
            }}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            {/* Connecting line FROM main circle TO each contact */}
            <motion.div
              animate={{
                width: active ? Math.abs(x) - 40 : 0,
                opacity: active ? 1 : 0,
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              style={{
                position: "absolute",
                top: "50%",
                left: -Math.abs(x) + 40,
                transform: "translateY(-50%)",
                height: 2,
                backgroundColor: "#2563eb",
                zIndex: 0,
              }}
            />

            {/* Contact bubble */}
            <motion.div
              whileHover={{ scale: 1.2 }}
              onClick={() => openContact(contact.link)}
              style={{
                cursor: "pointer",
                position: "relative",
                zIndex: 2,
              }}
            >
              <Avatar
                src={contact.logo}
                alt={contact.name}
                sx={{
                  width: 40,
                  height: 40,
                  backgroundColor: "#fff",
                  border: "2px solid #2563eb",
                  boxShadow: "0px 3px 10px rgba(0,0,0,0.2)",
                }}
              />

              {/* Tooltip on hover */}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: -25 }}
                transition={{ duration: 0.3 }}
                style={{
                  position: "absolute",
                  left: -70,
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "#1e293b",
                  color: "#fff",
                  padding: "3px 8px",
                  borderRadius: 6,
                  fontSize: "0.7rem",
                  whiteSpace: "nowrap",
                }}
              >
                {contact.name}
              </motion.div>
            </motion.div>
          </motion.div>
        );
      })}
    </Box>
  );
}
