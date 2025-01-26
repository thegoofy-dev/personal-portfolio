import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

type Project = {
  image: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
};

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="my-20 text-center text-4xl font-thin"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((project: Project, index: number) => (
          <motion.div
            key={index}
            className="mb-8 flex flex-wrap lg:justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <motion.div
              className="w-full lg:w-1/4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={project.image}
                className="mb-6 rounded"
                width={150}
                height={150}
                alt={project.title}
              />
            </motion.div>
            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <h6 className="mb-2 font-semibold">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-orange-300 transition-colors duration-300"
                  >
                    {project.title} ↗
                  </a>
                ) : (
                  project.title
                )}
              </h6>
              <p className="mb-4 text-neutral-400">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <motion.span
                    key={techIndex}
                  className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-orange-200"
                  whileHover={{ scale: 1.1, backgroundColor: "#1a1a1a" }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
