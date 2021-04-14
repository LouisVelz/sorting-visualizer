import React, { useState, useEffect, useRef } from "react";
import "./../styles/navBar.scss";

const NavBar = () => {
  const [navClasses, setNavClasses] = useState("navBar");
  let mounted = useRef(false);

  useEffect(() => {
    window.addEventListener("scroll", hideNavbar);
    if (mounted.current) {
      return () => {
        window.removeEventListener("scroll", hideNavbar);
      };
    }
    mounted.current = true;
  }, []);

  const hideNavbar = () => {
    window.pageYOffset > 70
      ? setNavClasses("navBar-hidden")
      : setNavClasses("navBar");
  };

  return (
    <div className={navClasses}>
      <h2>Sorting Visualizer</h2>
    </div>
  );
};

export default NavBar;
