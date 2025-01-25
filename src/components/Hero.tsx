import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.png";
import { motion, Variants } from "framer-motion";

// Define animation variant types
const textVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: (delay: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
      ease: "easeOut",
    },
  }),
};

const imageVariants: Variants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: 0.3,
      ease: "easeOut",
    },
  },
};

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-20 pt-24 pb-12 lg:pb-16 border-b border-neutral-900">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <motion.h1
              variants={textVariants}
              custom={0.1}
              initial="hidden"
              animate="visible"
              className="text-6xl lg:text-6xl font-thin text-gray-400 tracking-tight lg:mt-16"
            >
              Pankaj Tyagi
            </motion.h1>

            <motion.span
              variants={textVariants}
              custom={0.3}
              initial="hidden"
              animate="visible"
              role="heading"
              aria-level={2}
              className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer{" "}
              <span className="bg-gradient-to-r from-orange-300 via-orange-200 to-orange-300 bg-clip-text text-4xl tracking-tight text-transparent">
                {" "}
                & Programmer
              </span>
            </motion.span>

            <motion.p
              variants={textVariants}
              custom={0.5}
              initial="hidden"
              animate="visible"
              className="text-gray-400 my-2 max-w-xl py-4 font-tight tracking-tighter leading-relaxed"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center -mt-8">
            <motion.img
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              src={profilePic}
              alt="Pankaj Tyagi - Full Stack Developer"
              className="w-3/4 h-3/4 object-cover rounded-lg shadow-lg" // Changed from w-full h-full to w-3/4 h-3/4
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
