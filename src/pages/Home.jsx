import { useEffect, useState } from "react";
import {
  useMediaQuery,
} from "@mui/material";
import { motion } from "framer-motion";
import About from "./About";
import Project from "./Project";
import Certificate from "./Certificate";
import AnimatedCodeBackground from "../assets/AnimatedCodeBackground";
import Footer from "./Footer";
import GlassCard from "../assets/glassCard";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Journey", id: "journey" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function Home() {
  const isMobile = useMediaQuery("(max-width:768px)");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };


    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  return (
    <div className="w-full relative">
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden">
        <AnimatedCodeBackground />
        {/* navbar  */}

        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
            ? "backdrop-blur-xl bg-black/50 border-b border-white/10"
            : "bg-transparent"
            }`}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold cursor-pointer"
            >
              <motion.h1
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="text-xl font-bold italic text-white"
                style={{
                  fontFamily: "Momo Signature, cursive",
                }}
              >
                pAs
              </motion.h1>
            </motion.div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex gap-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  <button
                    onClick={() => {
                      document
                        .getElementById(item.id)
                        ?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                    }}
                    className="text-white font-medium tracking-wide"
                  > {item.name}
                  </button>

                  <span
                    className="absolute left-0 -bottom-1 h-[2px] w-0 bg-violet-500 transition-all duration-300 group-hover:w-full" />
                </motion.div>
              ))}
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden text-white"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </motion.nav>


        {/* MOBILE MENU */}
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ x: "100%" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8"
          >
            {navItems.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{
                  scale: 1.1,
                  color: "#8b5cf6",
                }}
              >
                <button
                  onClick={() => {
                    document
                      .getElementById(item.id)
                      ?.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                      });

                    setMobileOpen(false);
                  }}
                  className="text-3xl font-bold text-white"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* main setion  */}
        <div
  className="
    relative z-10
    flex flex-col lg:flex-row
    justify-center lg:justify-between
    items-center
    min-h-screen
    px-6 md:px-10 lg:px-20
    gap-10 lg:gap-0
  "
>
          <div
  className="
    w-full lg:w-1/2
    flex flex-col
    items-center lg:items-start
    text-center lg:text-left
  "
>
            <img
  src="/Coder.png"
  alt="coder image"
  className="
    w-[220px]
    sm:w-[280px]
    md:w-[350px]
    lg:w-[350px]
    xl:w-[350px]
    object-contain
  "
/>
           <p
  className="
    text-primary
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    font-bold
    uppercase
    tracking-[3px]
    md:tracking-[6px]
  "
>
              Full Stack <br /> <span className="text-4xl md:text-6xl">Developer</span>
            </p>

            <h1
  className="
    text-lg
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    font-black
    leading-tight
    max-w-xl
    mt-4
  "
  style={{ fontFamily: "Arizonia" }}
>
              Helping Startups Turn Ideas Into Reality
            </h1>

          </div>
          <div
  className="
    w-full
    lg:w-auto
    flex
    flex-col
    items-center
  "
>

           <div
  className="
    grid
    grid-cols-2
    gap-4
    w-full
    max-w-md
    border-b
    border-slate-300/20
    pb-6
  "
>

              <GlassCard >
                <h3>15+</h3>
                <p>Projects</p>
              </GlassCard>

              {/* <GlassCard>
              <h3>1+</h3>
              <p>Years Learning</p>
            </GlassCard> */}

              <GlassCard>
                <h3>10+</h3>
                <p>Technologies</p>
              </GlassCard>

              {/* <GlassCard>
              <h3>100%</h3>
              <p>Commitment</p>
            </GlassCard> */}

            </div>
            <p
  className="
    max-w-md
    mt-6
    text-sm
    sm:text-base
    md:text-lg
    text-slate-400
    text-center
  "
>
              MERN Stack Developer focused on building modern web applications, AI tools and scalable software solutions.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="
  px-6
  py-3
  mt-6
  rounded-full
  font-medium
  bg-white/10
  backdrop-blur-xl
  border
  border-white/10
  text-white
  hover:bg-white/20
  transition-all
"
            >
              Contact Me
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}