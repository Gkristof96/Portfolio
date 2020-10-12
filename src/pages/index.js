import React, { useState } from 'react'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import ProjectsSection from '../components/ProjectsSection'
import SkillsSection from '../components/SkillsSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Home = () => {
    const [ isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)
    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <HeroSection />
            <AboutSection/>
            <ProjectsSection  />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home