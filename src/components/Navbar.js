import "../styles/navbar.css";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

const Navbar = ({ mainVisible }) => {
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const burgerRef = useRef(null);

  useEffect(() => {
    if (!mainVisible) {
      navRef.current.classList.add("scrolled");
    } else {
      navRef.current.classList.remove("scrolled");
    }
  }, [mainVisible]);

  function toggleMenu() {
    if (toggleRef.current) {
      toggleRef.current.classList.toggle("show");

      burgerRef.current.classList.toggle("toggle");
    }
  }

  return (
    <motion.nav
      className="navbar"
      ref={navRef}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <h2 className="nav-brand">Web Dev💻</h2>
      <ul className="nav-links" ref={toggleRef}>
        <li className="link">
          <a href="#home" className="link-item">
            Home
          </a>
        </li>
        <li className="link">
          <a href="#skills" className="link-item">
            Skills
          </a>
        </li>
        <li className="link">
          <a href="#projects" className="link-item">
            Projects
          </a>
        </li>
        <li className="link">
          <a href="#about" className="link-item">
            About Me
          </a>
        </li>
        <li className="link">
          <a href="#contact" className="link-item">
            Contact
          </a>
        </li>
      </ul>
      <div className="lines" onClick={toggleMenu} ref={burgerRef}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
