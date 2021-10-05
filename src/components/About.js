import Divider from "./Divider";
import "../styles/about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <Divider
        color="#aba9c3"
        position={{ top: "0px", left: "0px" }}
        height="113px"
      />

      <h3>About Me</h3>
      <section className="about-me container">
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
            <span> mohammadabbas2609@gmail.com</span> to connect.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
