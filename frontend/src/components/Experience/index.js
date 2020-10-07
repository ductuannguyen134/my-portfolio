import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import {experienceData} from '../../data/experienceData';

function Experience() {
    const [isSticky, setSticky] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
          setSticky(ref.current.getBoundingClientRect().top <= 0);
        }
      };

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, [])

    return (
        <div className="experience" ref={ref}>
            <div className={isSticky ? "experience__header sticky" : "experience__header"}>
                <h1>EXPERIENCE</h1>
            </div>
            <div className="experience__main">
                <div className="experience__body">
                    <div  className="container">
                        <div className="container content">
                            <h3>Jobs:</h3>
                                <ul>
                                    {experienceData.jobs.map((job,index)=>(
                                        <>
                                            <li key={index}><p className="projectTitle"><b>{job.title}</b></p></li>
                                            <ul className="projectContent">
                                                <li>{job.year}</li>
                                                <li>Company: {job.company}</li>
                                                <li>Description: {job.description}</li>
                                                <li>Technologies: {job.technologies}</li>
                                            </ul>
                                        </>
                                    ))}
                                </ul>
                            <h3>Projects:</h3>
                                <ul>
                                    {experienceData.projects.map((project)=>(
                                        <>
                                            <li><p className="projectTitle"><a href={project.link} target="_blank" className="projectLink"><b>{project.title}</b> (click here for project link)</a></p></li>
                                            <ul className="projectContent">
                                                <li>Description: {project.description}</li>
                                                <li>Technologies: {project.technologies}</li>
                                            </ul>
                                        </>
                                    ))}
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience
