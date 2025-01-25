import logo from "../assets/Logo.jpg";
import { TiDocumentText } from "react-icons/ti";
import { FaLinkedin, FaGithub, FaXTwitter } from "react-icons/fa6";
import { useState } from "react";

const Navbar = () => {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center w-full ">
      <div className="flex flex-shrink-0 items-center">
        {/*Logo*/}
        <img className="mx-2 w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center gap-5 pr-10 text-2xl">
        <div className="text-gray-900 hover:text-white relative group">
          <TiDocumentText size={32} onClick={() => setIsResumeOpen(true)} />
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Resume
          </span>
        </div>
        <div className="text-gray-900 hover:text-white relative group">
          <a
            href="https://www.linkedin.com/in/thegoofy-dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            LinkedIn
          </span>
        </div>
        <div className="text-gray-900 hover:text-white relative group">
          <a
            href="https://github.com/thegoofy-dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            GitHub
          </span>
        </div>
        <div className="text-gray-900 hover:text-white relative group">
          <a
            href="https://x.com/thegoofyy_guy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter size={28} />
          </a>
          <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Twitter
          </span>
        </div>
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
              src="/Pankaj Tyagi [Resume].pdf"
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
