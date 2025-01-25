import { CONTACT } from "../constants";

const Contact: React.FC = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <h2 className="text-4xl text-center font-thin mb-10 pt-16">
        Get in Touch
      </h2>
      <div className="flex flex-col md:flex-row justify-center gap-8 items-center">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="hover:underline transition-all"
          >
            {CONTACT.phoneNo}
          </a>
        </p>
        <a
          href={`mailto:${CONTACT.email}`}
          className="my-4 hover:underline transition-all"
        >
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
};

export default Contact;
