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
    <div className="w-full relative overflow-hidden">
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
        <div className="relative z-10 flex flex-row justify-between items-center">
          <div className="m-20 mt-0">
            <img src="/Coder.png" alt="coder image" />
            <p className="text-primary text-5xl md:text-7xl font-bold uppercase tracking-[6px]">
              Full Stack <br /> <span className="text-4xl md:text-6xl">Developer</span>
            </p>

            <h1 className="text-xl md:text-4xl font-black leading-none"
              style={{ fontFamily: "Arizonia", width: "70%" }}>
              Helping Startups Turn Ideas Into Reality
            </h1>

          </div>
          <div className="mr-20">

            <div className="grid md:grid-cols-2 gap-2 border-b border-slate-300/20 pb-4">

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
            <p className="max-w-[350px] mx-auto mt-8 text-lg text-slate-400 text-justify">
              MERN Stack Developer focused on building modern web applications, AI tools and scalable software solutions.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-primary text-white px-6 py-3 rounded-full font-medium mt-4 bg-white/10 hover:bg-white/20"
            >
              Contact Me
            </button>
          </div>

        </div>
      </section>

      {/* <Outlet /> */}
      {/* MOBILE EXTRA SECTIONS */}
      {isMobile && (
        <div className="px-5 pb-20 space-y-16">
          <About />
          <Certificate />
          <Project />
          <Footer />
        </div>
      )}
    </div>
  );
}