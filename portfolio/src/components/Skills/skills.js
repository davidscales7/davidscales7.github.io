import React from 'react';
import './skills.css';
import ThreeApps from '../../assets/ThreeApps.png';
import ML from '../../assets/ML.jpg';
import ThreeProjects from '../../assets/ThreeProjects.png';

const Skills = () => {
    return (
        <section id="skills">
            <span className="skillTitle">What I do</span>
            <span className="skillDescription">
                I am a Graduate CS with a variety of personal projects already completed. This spans from making Apps with JavaScript and TypeScript projects to Data Analysis Projects where I make projects to predict future outcomes.
            </span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={ThreeProjects} alt="First Project here" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2></h2>
                        <p>I have done three projects with one more on the way being a website for a rugby charity who I am talking regularly with</p>
                    </div>
                </div>
              
              
            </div>
        </section>
    );
};

export default Skills;
