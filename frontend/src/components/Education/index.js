import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import {educationData} from '../../data/educationData'; 

function Education() {
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
        <div className="education" ref={ref}>
            <div className={isSticky ? "education__header sticky" : "education__header"}>
                <h1>EDUCATION</h1>
            </div>
            <div className="education__main">
                <div className="education__body">
                    <div  className="edu-container">
                        <div className="edu-container content">
                            <h3 className="edu-title">Bachelor</h3>
                            <ul className="edu-content">
                                <li>{educationData.bachelor.year}</li>
                                <li>{educationData.bachelor.university}</li>
                                <li>{educationData.bachelor.degree}</li>
                                <li>GPA: {educationData.bachelor.gpa}</li>
                                <li>Activities: {educationData.bachelor.activities}</li>
                            </ul> 
                            <h3 className="edu-title">Master</h3> 
                            <ul className="edu-content" >
                                <li>{educationData.master.year}</li>
                                <li>{educationData.master.university}</li>
                                <li>{educationData.master.degree}</li>
                                <li>Activities: {educationData.master.activities}</li>
                            </ul>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
