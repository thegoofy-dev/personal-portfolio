import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/Profile.png";

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-20 pt-24 pb-12 lg:pb-16 border-b border-neutral-900">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <h1 className="text-6xl lg:text-6xl font-thin text-gray-400 tracking-tight lg:mt-16">
              Pankaj Tyagi
            </h1>
            <span
              role="heading"
              aria-level={2}
              className="bg-gradient-to-r from-orange-100 via-orange-200 to-orange-100 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer & Software Engineer
            </span>

            <p className="text-gray-400 my-2 max-w-xl py-4 font-tight tracking-tighter leading-relaxed">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img
              src={profilePic}
              alt="Kevin Rush - Full Stack Developer"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
