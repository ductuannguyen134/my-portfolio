import React, { useEffect, useRef, useState } from 'react';
import {Container, Avatar} from '@material-ui/core';
import './styles.css';
import pic from './tuan.jpg';
import {summaryData, contactData} from '../../data/aboutData';
import resume from '../../data/resume.pdf';

function About() {

    const [isSticky, setSticky] = useState(false);
    const [appear, setAppear] = useState(false);
    const ref = useRef(null);

    const handleScroll = () => {
        if (ref.current) {
          setSticky(ref.current.getBoundingClientRect().top <= 0);
          setAppear(ref.current.getBoundingClientRect().top <= 0);
        }
      };

    useEffect(()=>{
        window.addEventListener('scroll',handleScroll);
        return ()=>{
            window.removeEventListener('scroll', () => handleScroll);
        }
    }, [])

    return (
        <div className="about"  ref={ref} id="about">
            <div className={isSticky ? "about__header sticky" : "about__header"}>
                <h1>ABOUT ME</h1>
            </div>
            <div className="about__main">
                <div className={appear ? "about__body fade" : "about__body"}>

                    <div  className="container profile-pic">
                        <img src={pic} alt="profile-pic" width="400" />
                    </div>
                    <div  className="container summary">
                        <h3>{summaryData.title}</h3>
                        <p>{summaryData.content1}</p>
                        <p>{summaryData.content2}</p>
                        <p>{summaryData.content3}</p><br></br><br></br>
                        <a href={resume} download className="resume">My CV (download here)</a>
                    </div>
                    <div className="container contacts">
                        <h3>{contactData.title}</h3>
                        <p>{contactData.locationIcon} {contactData.location}</p>
                        <p>{contactData.phoneIcon} {contactData.phone}</p>
                        <p>{contactData.emailIcon} {contactData.email}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
