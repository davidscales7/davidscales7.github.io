import React, { useState } from 'react';
import './works.css';
import ThreeApps from '../../assets/ThreeApps.png';
import FinanceApp1 from '../../assets/financeApp.png';
import FinanceApp2 from '../../assets/FinanceAppTable.png';
import LanguageLandingPage from '../../assets/ScreenshotOfLandingPage.png';
import LanguageQuizScreenShot from '../../assets/ScreenshotOfQuizzes.png';
import LanguageFlashCardScreenshot from '../../assets/ScreenshotOfLandingFlashcards.png'
import LanguageLessonsScreenShot from '../../assets/ScreenshotOfLessons.png'
import LanguageFlashCard1 from '../../assets/ScreenshotOfFlashcards1.png'
import LanguageFlashCard2 from '../../assets/ScreenshotOfFlashcards2.png'
import Lessons from '../../assets/ScreenshotOfLesson.png'
import TopmanRugbyLandingPage from '../../assets/TopmanLandingPage.png'
import TopmanRugbyWhatIsRugby from '../../assets/TopmanWhatIsRugby.png'

import Telepharmacy from '../../assets/TelepharmacyMedicine.png';


const Works = () => {
    const [selectedApp, setSelectedApp] = useState(null); // Tracks which app is clicked

    const projects = [

        {
            id: 'languageApp',
            mainImg: LanguageLandingPage,
            screenshots: [LanguageLandingPage, LanguageQuizScreenShot,LanguageFlashCardScreenshot,LanguageLessonsScreenShot,LanguageFlashCard1,LanguageFlashCard2,Lessons],
            title: 'Language Learning App',
            description: 'An app for learning new languages through lessons, quizzes and flashcards, they are able to be tracked with accolades for progression. Includes personal logins so users can track there own progress.',
            technologies: ['React', 'TypeScsript', 'MongoDB','GitHub',],
            lessons: 'I had to learn incorporating a back end fully with a front on for different uses not just for login and logging out. I also added in encrytption for passwords.'
        },
        
        {
            id:'Topman Rugby',
            mainImg:TopmanRugbyLandingPage,
            screenshots:[TopmanRugbyLandingPage,TopmanRugbyWhatIsRugby],
            title:'Topman Rugby Charity',
            description: 'A website to promote a charity and raise awareness of rugby and to spread the message of rugby worldwide.',
            technologies:['React','Postgre SQL'],
            lessons: "I had to learn in this project to communicate to the director of the charity and there vision for the site. Another lesson that I learnt was making API's and Backend work together inorder to host the website online and to let interested parties Sign up, Log in and also for Admins to Create, Edit and Delete posts."

        },
        {
            id: 'financeApp',
            mainImg: FinanceApp1,
            screenshots: [FinanceApp1, FinanceApp2],
            title: 'Finance Tracker App',
            description: 'A simple finance tracking app built with React and Firebase. It allows users to manage their expenses.',
            technologies: ['React','Mongodb', 'CSS','Github'],
            lessons: 'I learned about version control with github and how important it is to stay upto date on commits so that back tracking is easier and more managable',
        },
     
        {
            id: 'telepharmacy',
            mainImg: Telepharmacy,
            screenshots: [Telepharmacy],
            title: 'Telepharmacy App',
            description: 'An app designed for virtual consultations and medicine delivery.',
            technologies: ['React'],
            lessons: 'Here was my app project I did which just used react, this took me a while because I had never undertaken a project like this before',
        },
    ];

    const handleBack = () => {
        setSelectedApp(null); // Reset to show main apps
    };

    return (
        <section id='works'>
            {selectedApp === null ? (
                <>
                    <h2 className='worksTitle'>My Portfolio</h2>
                    <span className='worksDesc'>Click on a project to learn more</span>
                    <div className='worksImgs'>
                        {projects.map((project) => (
                            <img
                                key={project.id}
                                src={project.mainImg}
                                alt={project.title}
                                className="worksImg"
                                onClick={() => setSelectedApp(project)} // Set the clicked app
                            />
                        ))}
                    </div>
                </>
            ) : (
                <div className='projectDetails'>
                    <h2>{selectedApp.title}</h2>
                    <p>{selectedApp.description}</p>
                    <h3>Technologies Used:</h3>
                    
                        {selectedApp.technologies.map((tech, index) => (
                            <li key={index}>{tech}</li>
                        ))}
                    
                    <h3>What I Learned:</h3>
                    <p>{selectedApp.lessons}</p>
                    <h3>Screenshots:</h3>
                    <div className='screenshots'>
                        {selectedApp.screenshots.map((screenshot, index) => (
                            <img
                                key={index}
                                src={screenshot}
                                alt={`Screenshot ${index + 1}`}
                                className="screenshotImg"
                            />
                        ))}
                    </div>
                    <button className="workBtn" onClick={handleBack}>Back to Projects</button>
                </div>
            )}
        </section>
    );
};

export default Works;
