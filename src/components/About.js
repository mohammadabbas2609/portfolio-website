import { useEffect, useRef, useState } from "react";
import Divider from "./Divider";
import "../styles/about.css";
import { useAnimation, motion } from "framer-motion";

const transitionBox = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

const About = () => {
  const [visible, setVisible] = useState(false);
  const controls = useAnimation();

  const aboutRef = useRef(null);

  useEffect(() => {
    const cb = entries => {
      const entry = entries[0];
      setVisible(entry.isIntersecting);
    };

    const options = {
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver(cb, options);
    const currentValue = aboutRef.current;
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
  }, [aboutRef, visible, controls]);
  return (
    <div className="about" id="about">
      <Divider
        color="#aba9c3"
        position={{ top: "0px", left: "0px" }}
        height="113px"
      />

      <h3>About Me</h3>
      <motion.section
        className="about-me container"
        ref={aboutRef}
        initial="hidden"
        animate={controls}
        variants={transitionBox}
      >
        <div className="content">
          <p>
            I'm a Full stack Web developer, with experience in{" "}
            <span>MERN stack</span> . I love what i do. I consider myself as{" "}
            <span>forever learner</span> eager to build career in web
            development
          </p>
          <p>
            Bringing Ideas to the web is my passion.Apart from coding I really
            like listening to hip-hop Music,Reading novels. I'm currently
            working as a local freelancer, reach out to me at{" "}
            <span> mohammadabbas2609@gmail.com</span>.
          </p>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
