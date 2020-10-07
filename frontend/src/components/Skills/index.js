import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import {mySkills} from '../../data/skillData';

function Skills() {
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
        <div className="skills" ref={ref}>
            <div className={isSticky? "skills__header sticky" : "skills__header"}>
                <h1>SKILLS</h1>
            </div>
            <div className="skills__main">
                <div className="skills__body">
                    <div  className="container">
                        <div className="container content">
                            <h3>Programming Languages: </h3>
                            <ul>
                                {mySkills.programming.map((prog,index)=>(
                                    <li key={index}>{prog.name}</li>
                                ))}
                            </ul>
                            <h3>Frameworks & Platforms: </h3>
                            <ul>
                                {mySkills.framework.map((fr, index)=>(
                                    <li key={index}>{fr.name}</li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                    <div  className="container">
                        <div className="container content">
                            <h3>Database</h3>
                            <ul>
                                {mySkills.database.map((db,index)=>(
                                    <li key={index}>{db.name}</li>
                                ))}
                            </ul>
                            <h3>Version Control</h3>
                            <ul>
                                <li>{mySkills.versionControl}</li>
                            </ul>
                            <h3>IDE</h3>
                            <ul>
                                {mySkills.ide.map((editor,index)=>(
                                    <li key={index}>{editor.name}</li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                    <div  className="container">
                        <div className="container content">
                            <h3>Foreign Language</h3>
                            <ul>
                                {mySkills.foreignLanguage.map((fl,index)=>(
                                    <li key={index}>{fl.name}</li>
                                ))}
                            </ul>
                            <h3>Knowledge</h3>
                            <ul>
                                {mySkills.knowledge.map((know,index)=>(
                                    <li key={index}>{know.name}</li>
                                ))}
                            </ul>
                        </div> 
                    </div>
                </div>
            </div>
    </div>
    )
}

export default Skills
