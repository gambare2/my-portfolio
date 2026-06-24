import {
    GraduationCap,
    Briefcase,
    BrainCircuit,
    Rocket,
} from "lucide-react";
import { motion } from "framer-motion"

const journey = [
    {
        type: "education",
        title: "B.Tech Computer Science",
        organization: "Dr. Bhimrao Ambedkar University",
        period: "2022 - 2026",
        description: "Pursuing Computer Science & Engineering.",
        icon: GraduationCap,
    },
    {
        type: "experience",
        title: "Full Stack Developer Intern",
        organization: "Technohacks",
        period: "May 2024",
        description: "Worked on real-world development projects.",
        icon: Briefcase,
    },
    {
        type: "education",
        title: "AI in Python",
        organization: "Edunova Technology",
        period: "2025 - Present",
        description: "Advanced AI and Python development.",
        icon: BrainCircuit,
    },
    {
        type: "experience",
        title: "Full Stack Developer",
        organization: "Adsource IT Solution",
        period: "Jul 2025 - Present",
        description: "Building production-grade MERN applications.",
        icon: Rocket,
    },
];

export default function Details() {
    return (
        <div className="relative max-w-6xl mx-auto" id="detail">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">

                <div className=" absolute top-20 left-20 w-72 h-72 rounded-full bg-violet-500/10 blur-[120px] " />

                <div className=" absolute bottom-20 right-20 w-96 h-96 rounded-full bg-cyan-500/10 blur-[140px]" />


            </div>

            {/* Animated Vertical Timeline */}
            <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
                className=" hidden md:block absolute left-1/2 top-0 -translate-x-1/2 w-[4px] rounded-full bg-gradient-to-b from-violet-500 via-cyan-400 to-transparent shadow-[0_0_40px_rgba(139,92,246,.8)]" />
                
                {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={index}
                        initial={{
                            opacity: 0,
                            y: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                        }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.8,
                            delay: index * 0.15,
                        }}
                        className={`relative flex ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                        {/* Timeline Node */}
                        <div className=" hidden md:flex absolute left-1/2 top-12 -translate-x-1/2 items-center justify-center z-30" >

                            {/* Outer Pulse Ring */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.5, 1],
                                    opacity: [0.6, 0.2, 0.6],
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                }}
                                className="absolute w-16 h-16 rounded-full bg-violet-500/20" />

                            {/* Center Circle */}
                            <div
                                className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 flex items-center justify-center shadow-[0_0_30px_rgba(139,92,246,.8)]">
                                <Icon size={24} className="text-white" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative w-full md:w-[44%]">

                            {/* Connector */}
                            {index % 2 === 0 ? (
                                <div
                                    className="hidden md:block absolute top-16 right-[-85px] h-[2px] w-[85px] bg-gradient-to-r from-violet-500 to-transparent" />
                            ) : (
                                <div
                                    className="hidden md:block absolute top-16 left-[-85px] h-[2px] w-[85px] bg-gradient-to-l from-violet-500 to-transparent" />
                            )}

                            {/* Glass Card */}
                            <motion.div
                                whileHover={{
                                    y: -12,
                                    scale: 1.02,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 200,
                                }}
                                className="group relative overflow-hidden mb-4 lg:mb-0 rounded-[32px] p-8 border border-white/10 backdrop-blur-2xl bg-white/[0.05] shadow-[0_8px_50px_rgba(0,0,0,.5)]">

                                {/* Hover Glow */}
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-violet-500/10 via-cyan-500/10 to-violet-500/10" />

                                {/* Period Badge */}
                                <div
                                    className="absolute top-6 right-6 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm">{item.period}</div>

                                {/* Type Badge */}
                                <span
                                    className={`inline-flex px-4 py-2 rounded-full text-xs tracking-widest uppercase ${item.type === "education"
                                        ? "bg-cyan-500/10 text-cyan-400"
                                        : "bg-violet-500/10 text-violet-400"
                                        }`}
                                >
                                    {item.type}
                                </span>

                                <h3
                                    className="text-3xl font-bold text-white mt-6 mb-3">{item.title}</h3>

                                <p className="text-violet-400 text-lg mb-4">{item.organization}</p>

                                <p className="text-slate-400 leading-8">{item.description}</p>
                            </motion.div>
                        </div>
                    </motion.div>
                );
            })}
        </div>
    );
}