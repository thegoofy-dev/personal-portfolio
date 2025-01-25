import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiDocker } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { motion } from "framer-motion";

type TechIconProps = {
  Icon: React.ElementType;
  color: string;
  label: string;
  duration: number;
};

const iconsVariants = (duration: number) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -15],
    rotate: [-2, 2],
    scale: [1, 1.05, 1],
    transition: {
      duration: duration,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut" as const,
    },
  },
});

const TECH_ICONS: TechIconProps[] = [
  { Icon: RiReactjsLine, color: "#61DAFB", label: "React", duration: 2.5 },
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js", duration: 3 },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript", duration: 5 },
  { Icon: SiGit, color: "#F14E32", label: "Git", duration: 7 },
  { Icon: SiMongodb, color: "#00ED64", label: "MongoDB", duration: 9 },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS", duration: 11 },
  { Icon: FaNodeJs, color: "#339933", label: "Node.js", duration: 13 },
  { Icon: SiDocker, color: "#2496ED", label: "Docker", duration: 15 },
  { Icon: SiMysql, color: "#4479A1", label: "MySQL", duration: 17 },
  { Icon: FaJava, color: "#007396", label: "Java", duration: 19 },
];

const TechIcon: React.FC<TechIconProps> = ({ Icon, color, label, duration }) => (
  <motion.div
    variants={iconsVariants(duration)}
    initial="initial"
    animate="animate"
    whileHover={{
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: { duration: 0.3 },
    }}
    className="rounded-2xl border-4 bg-neutral-800 p-4 cursor-pointer"
    aria-label={`${label} icon`}
  >
    <Icon className="text-6xl" style={{ color }} />
  </motion.div>
);

const Technologies: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-center text-4xl font-thin">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {TECH_ICONS.map((iconProps) => (
          <TechIcon key={iconProps.label} {...iconProps} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;