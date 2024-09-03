import { useEffect, useState } from "react";
import { FaCode } from "react-icons/fa";

function Header({ homeRef, skillsRef, contactRef, projectsRef, setHasScrolled }) {
  const [hasShadow, setHasShadow] = useState(false);

  const scrollToSection = (sectionRef) => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
      
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);

      } else {
        setHasShadow(false);

      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, );

  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-white ${
        hasShadow ? "border-b-[2px] shadow-lg" : ""
      } transition-all duration-300 py-5 flex justify-between items-center px-6`}
    >
      <FaCode />
      <nav>
        <ul className="flex justify-center items-center gap-10">
          <li
            className="cursor-pointer relative inline-block group"
            onClick={() => {
              scrollToSection(homeRef);
            }}
          >
            Home
            <span className="absolute bottom-0 left-[2px] right-[2px] h-0.5 bg-black transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </li>
          <li
            className="cursor-pointer relative inline-block group"
            onClick={() => {
              scrollToSection(projectsRef);
            }}
          >
            Projects
            <span className="absolute bottom-0 left-[2px] right-[2px] h-0.5 bg-black transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </li>
          <li
            className="cursor-pointer relative inline-block group"
            onClick={() => {
              scrollToSection(skillsRef);
            }}
          >
            Skills
            <span className="absolute bottom-0 left-[2px] right-[2px] h-0.5 bg-black transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </li>
          <li
            className="cursor-pointer relative inline-block group"
            onClick={() => {
              scrollToSection(contactRef);
            }}
          >
            Contact
            <span className="absolute bottom-0 left-[2px] right-[2px] h-0.5 bg-black transform -translate-y-1 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-200" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
