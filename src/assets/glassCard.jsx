import { motion } from "framer-motion";

export default function GlassCard({ children, className = "" }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ duration: 0.2 }}
      className={` w-18 h-14 text-sm
        flex flex-col items-center justify-center
        overflow-hiddens p-5
        ${className}
      `}
    >
      {children}
    </motion.div>
  );

}