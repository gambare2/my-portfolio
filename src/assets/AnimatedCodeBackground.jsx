import { motion, useScroll, useTransform } from "framer-motion";

export default function AnimatedBackground() {
  const { scrollX, scrollY } = useScroll();

  const moveUp = useTransform(scrollX, [0, 2000], [0, -250]);
  const moveDown = useTransform(scrollX, [0, 2000], [0, 150]);

  const aryanX = useTransform(scrollY, [0, 2000], [0, 1500]);
  const aryanY = useTransform(scrollY, [0, 2000], [0, -800]);

  const singhX = useTransform(scrollY, [0, 2000], [0, -1500]);
  const singhY = useTransform(scrollY, [0, 2000], [0, 800])
  const opacity = useTransform(scrollY, [0, 800], [0.03, 0]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#030817]" />

      {/* Blue Glow */}
      <motion.div
        style={{ y: moveDown }}
        className="absolute right-[6%] top-[8%] w-[700px] h-[700px] rounded-full blur-[180px] bg-purple-500/40" />

      {/* Purple Glow */}
      <motion.div
        style={{ y: moveUp }}
        className=" absolute left-[15%] bottom-[10%] w-[500px] h-[500px] rounded-full blur-[180px] bg-teal-500/20"
      />
      {/* Huge Name Layer */}
      <div className="absolute inset-0 flex flex-col justify-center overflow-hidden mt-40">
        <motion.div
          style={{
            x: aryanX,
            y: aryanY,
            opacity,
            fontFamily: '"Monoton", sans-serif',
          }}
          className=" text-[10vw] font-black leading-[0.8] text-white select-none uppercase mb-10 whitespace-nowrap"
        >
          Prince
        </motion.div>

        <motion.div
          style={{
            x: singhX,
            y: singhY,
            opacity,
            fontFamily: '"Monoton", sans-serif',
          }}
          className=" text-[10vw] font-black leading-[0.8] text-white select-none uppercase whitespace-nowrap ml-48"
        >
          Aryan Singh
        </motion.div>
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Noise */}
      <div className=" absolute inset-0 opacity-[0.015] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
}