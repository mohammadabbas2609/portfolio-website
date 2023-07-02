import "../styles/main.css";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
import { useRef, useState, useEffect } from "react";

const Main = () => {
  const mainRef = useRef(null);
  const [mainVisible, setMainVisible] = useState(true);

  useEffect(() => {
    const mainObserver = new IntersectionObserver(
      enteries => {
        enteries.forEach(entry => {
          setMainVisible(entry.isIntersecting);
        });
      },
      { rootMargin: "-150px 0px 0px 0px" }
    );

    mainRef.current && mainObserver.observe(mainRef.current);
  }, []);

  return (
    <>
      <Navbar mainVisible={mainVisible} />
      <main className="container" id="home" ref={mainRef}>
        <div className="main">
          <motion.div
            className="intro"
            initial={{ x: -800 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h5>Hi, I'm Abbas.</h5>
            <h3>MERN Stack Developer</h3>
            <p>Who makes or sometime breaks websites.</p>
            {/* <p>Stan in real life ✌</p> */}
            <a href="#about" className="btn">
              Know More.
            </a>
          </motion.div>
          <motion.div
            className="img"
            initial={{ x: 700 }}
            animate={{ x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <p>Yep thats Me😉</p>
            <img src="./avatar.svg" alt="developer" />
          </motion.div>
        </div>
      </main>
    </>
  );
};

export default Main;
