import { createContext, useContext, useRef, useState } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [togglePublic, setTogglePublic] = useState(true);
  const [toggleSrc, setToggleSrc] = useState(true);
  const [toggleExplorer, setToggleExplorer] = useState(true);
  const sectionRef = useRef({});

  const handleToggleSrc = () => {
    setToggleSrc(!toggleSrc);
  };
  const handleTogglePublic = () => {
    setTogglePublic(!togglePublic);
  };

  const scrollToSection = (sectionName) => {
    const section = sectionRef.current[sectionName];
    if (section) {
      // console.warn("about me pressed");
      // if (window.innerWidth < 1024) {
      //   // setToggleExplorer(false);
      // }

      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <GlobalContext.Provider
      value={{
        scrollToSection,
        sectionRef,
        handleTogglePublic,
        togglePublic,
        toggleSrc,
        handleToggleSrc,
        toggleExplorer,
        setToggleExplorer,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
