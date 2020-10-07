import React from 'react';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Education from '../../components/Education';

function Home() {
    return (
        <div>
            <About />
            <Skills />
            <Experience />
            <Education />
        </div>
    )
}

export default Home