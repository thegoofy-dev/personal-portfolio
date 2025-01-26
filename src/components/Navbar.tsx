import { TiDocumentText } from "react-icons/ti";
import { FaLinkedin, FaGithub, FaDiscord, FaWhatsapp } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion"; // Add this import at the top
const Resume = "Resume.pdf";

// Define props type for social link component
interface SocialLinkProps {
  href: string;
  Icon: React.ElementType;
  label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, Icon, label }) => (
  <motion.div 
    className="text-gray-900 hover:text-white relative group"
    whileHover={{ 
      rotate: [0, -10, 10, -10, 0],
      transition: { duration: 0.5 }
    }}
  >
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Icon size={28} />
    </a>
    <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      {label}
    </span>
  </motion.div>
);

const Navbar: React.FC = () => {
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  return (
    <nav className="flex justify-between items-center w-full">
      <div className="flex flex-shrink-0 items-center">
        {/*Logo */}
        {/* <img className="mx-2 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="flex items-center justify-center gap-5 p-4 text-2xl sm:m-8 mx-auto">
        <div className="text-gray-900 hover:text-white relative group">
          <TiDocumentText size={32} onClick={() => setIsResumeOpen(true)} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Resume
          </span>
        </div>
        <SocialLink
          href="https://www.linkedin.com/in/thegoofy-dev/"
          Icon={FaLinkedin}
          label="LinkedIn"
        />
        <SocialLink
          href="https://wa.me/8476846209"
          Icon={FaWhatsapp}
          label="WhatsApp"
        />
        <SocialLink
          href="https://github.com/thegoofy-dev"
          Icon={FaGithub}
          label="GitHub"
        />
        <SocialLink
          href="https://discord.gg/SGk9PVzz"
          Icon={FaDiscord}
          label="Discord"
        />
      </div>

      {/* Resume Modal */}
      {isResumeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center animate-fadeIn">
          <div className="bg-white p-4 rounded-lg w-[90%] h-[90%] relative transform transition-all duration-300 scale-up-center">
            <button
              onClick={() => setIsResumeOpen(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
            >
              ✕
            </button>
            <iframe
              src={Resume}
              title="Resume"
              className="w-full h-full"
              style={{ border: "none" }}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
