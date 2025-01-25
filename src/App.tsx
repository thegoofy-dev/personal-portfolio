import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Technologies from "./components/Technologies";
import Experience from "./components/Experience";
import Projects from "./components/Projects";

const App = () => {
  return (
    <>
      <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-slate-500 selection:text-gray-800">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] w-full min-h-svh overflow-x-hidden bg-black bg-[radial-gradient(100%_50%_at_50%_0%,rgba(255,255,255,0.8)_0%,rgba(255,342,203,0.5)_50%,rgba(0,0,0,0)_100%)]"></div>
        </div>
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Experience />
          <Projects />
        </div>
      </div>
    </>
  );
};

export default App;
