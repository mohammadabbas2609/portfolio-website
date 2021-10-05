import { useEffect, useRef, useState } from "react";
import Divider from "./Divider";
import { motion, useAnimation } from "framer-motion";
import "../styles/skills.css";

const transitionBox = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const Skills = () => {
  const tech1Ref = useRef(null);
  const [visible, setIsVisible] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const cb = entries => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };
    const options = {
      root: null,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(cb, options);
    const currentValue = tech1Ref.current;
    if (currentValue) {
      observer.observe(currentValue);
    }

    if (visible) {
      controls.start("visible");
      observer.unobserve(currentValue);
    } else {
      controls.start("hidden");
    }

    return () => {
      if (currentValue) observer.unobserve(currentValue);
    };
  }, [tech1Ref, visible, controls]);

  return (
    <section className="skills" id="skills">
      <Divider
        color="#fff"
        position={{ top: "0px", left: "0px" }}
        height="113px"
      />
      <div className="skills-content">
        <h3>Technologies I Know !</h3>
        <div className="skills-logo container">
          <motion.div
            className="tech1"
            ref={tech1Ref}
            initial="hidden"
            animate={controls}
            variants={transitionBox}
          >
            <img src="./skills/html.svg" alt="html" />
            <img src="./skills/css.svg" alt="css" />
            <img src="./skills/javascript.svg" alt="js" />
            <img src="./skills/git.svg" alt="git" />
            <img src="./skills/react.svg" alt="react" />
            <img src="./skills/nextjs.png" alt="nextjs" />
          </motion.div>
          <motion.div
            className="tech2"
            ref={tech1Ref}
            initial="hidden"
            animate={controls}
            variants={transitionBox}
          >
            <img src="./skills/nodejs.svg" alt="node" />
            <img src="./skills/mongodb.svg" alt="mongodb" />
            <img src="./skills/graphql.svg" alt="graphql" />
            <img src="./skills/docker.svg" alt="docker" />
            <img src="./skills/kubernetes.svg" alt="kubernetes" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
