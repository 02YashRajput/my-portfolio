import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

function App() {
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const skillsRef = useRef(null);
  

  return (
    <div className="relative  md:text-lg lg:text-xl xl:text-2xl">
      <Header
        homeRef={homeRef}
        projectsRef={projectsRef}
        contactRef={contactRef}
        skillsRef={skillsRef}
      />
      <main className="mt-20">
        <Hero homeRef = {homeRef}         projectsRef={projectsRef}
        contactRef={contactRef}/>
        <Projects/>
        <section className="min-h-screen" ref={skillsRef}>
          Skills
        </section>
        <section className="min-h-screen" ref={contactRef}>
          contact
        </section>
      </main>
    </div>
  );
}

export default App;