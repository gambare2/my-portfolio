import React from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

export default function AnimatedCodeBackground() {
  const isMobile = useMediaQuery("(max-width:768px)");

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      {/* MOBILE BACKGROUND */}
      {isMobile ? (
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/mobile-pirate-bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.5,
          }}
        />
      ) : (
        <>
          {/* DESKTOP PIRATE BACKGROUND */}
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/pirate-bg2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.4,
            }}
          />

          {/* PIRATE SHIP SAILING */}
          <motion.img
            src="/pirate-ship.png"
            alt="ship"
            animate={{
              x: [200, window.innerWidth + 200],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{
              position: "absolute",
              bottom: "12%",
              width: 160,
              opacity: 0.65,
            }}
          />

          {/* OCEAN WAVE EFFECT */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              position: "absolute",
              bottom: 0,
              width: "100%",
              height: "30%",
              background:
                "linear-gradient(to top, rgba(0,70,130,0.5), transparent)",
            }}
          />

          {/* FLOATING PARTICLES */}
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -40, 0],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 5,
                repeat: Infinity,
              }}
              style={{
                position: "absolute",
                width: 4,
                height: 4,
                background: "#9be7ff",
                borderRadius: "50%",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: 0.5,
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}