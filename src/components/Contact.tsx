import { CONTACT } from "../constants";
import { motion } from "framer-motion";

// Define the Contact data type
interface ContactProps {
  address: string;
  phoneNo: string;
  email: string;
}

const Contact: React.FC = () => {
  const contactInfo: ContactProps = CONTACT;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="border-b border-neutral-900 pb-20"
    >
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-4xl text-center font-thin mb-10 pt-16"
      >
        Get in Touch
      </motion.h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-center gap-8 items-center"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="my-4"
        >
          {contactInfo.address}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="my-4"
        >
          <a
            href={`tel:${contactInfo.phoneNo}`}
            className="hover:underline transition-all"
          >
            {contactInfo.phoneNo}
          </a>
        </motion.p>
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          href={`mailto:${contactInfo.email}`}
          className="my-4 hover:underline transition-all"
        >
          {contactInfo.email}
        </motion.a>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
