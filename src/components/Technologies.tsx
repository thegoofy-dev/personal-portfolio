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

interface TechIconProps {
  Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  label: string;
}

const TECH_ICONS: TechIconProps[] = [
  { Icon: RiReactjsLine, color: "#61DAFB", label: "React" },
  { Icon: SiNextdotjs, color: "#ffffff", label: "Next.js" },
  { Icon: SiTypescript, color: "#3178C6", label: "TypeScript" },
  { Icon: SiGit, color: "#F14E32", label: "Git" },
  { Icon: SiMongodb, color: "#00ED64", label: "MongoDB" },
  { Icon: SiTailwindcss, color: "#06B6D4", label: "Tailwind CSS" },
  { Icon: FaNodeJs, color: "#339933", label: "Node.js" },
  { Icon: SiDocker, color: "#2496ED", label: "Docker" },
  { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
  { Icon: FaJava, color: "#007396", label: "Java" },
];

const TechIcon: React.FC<TechIconProps> = ({ Icon, color, label }) => (
  <div
    className="rounded-2xl border-4 bg-neutral-800 p-4 cursor-pointer"
    aria-label={`${label} icon`}
  >
    <Icon className="text-6xl" style={{ color }} />
  </div>
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
