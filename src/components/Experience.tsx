import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
import { BsCalendarEvent, BsBuilding } from "react-icons/bs";


const Experience: React.FC = () => {
  return (
    <div className="border-b border-neutral-800 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-thin"
      >
        Experience
      </motion.h2>
      <div>
        {EXPERIENCES.map((experience, index: number) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400 flex items-center gap-2">
                <BsCalendarEvent />
                {experience.year}
              </p>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold flex items-center gap-2">
                <BsBuilding className="text-orange-200" />
                {experience.role} -{" "}
                <span className="text-sm text-orange-200">
                  {experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies?.map((tech: string, idx: number) => (
                <span
                  key={idx}
                  className="mr-2 mt-4 rounded bg-neutral-900 p-1 text-sm font-medium text-orange-100"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
