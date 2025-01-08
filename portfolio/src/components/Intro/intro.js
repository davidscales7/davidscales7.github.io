import React from "react";
import './intro.css';
import bg from '../../assets/bg.png';
import { Link } from "react-scroll";
import HireMe from '../../assets/HireMe.png'
const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">
          I'm <span className="introName">Scales</span> 
          <br /> Aspiring Web Developer</span>
        <p className="introPara"> I am a recent Graduate in Computer Science <br /> and an aspiring web developer </p>

        
<Link><button className="btn" ><img src={HireMe} alt="Hire me" className="btnImg"/>Hire me </button> 
</Link>
      </div>
      <img src={bg} alt="Background" className="bg" />
    </section>
  );
};

export default Intro;
