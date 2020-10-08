import React, { useState} from 'react'
import Video from '../../videos/video.mp4'
import { ButtonS } from '../ButtonElements'
import {HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight} from './HeroElements'

const HeroSection = () => {
    const [ hover, setHover] = useState(false)
    const onHover = () => setHover(!hover)
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'  />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to my Site</HeroH1>
                <HeroP>This is my portfolio page, where you can see some of my projects</HeroP>
                <HeroBtnWrapper>
                    <ButtonS
                    smooth={true} duration={500} spy={true} exact="true" offset={-100}
                    primary={true}
                    big={true}
                    dark={true}
                    rounded={true}
                    onMouseEnter={onHover} onMouseLeave={onHover} to='projects'>See more {hover ? <ArrowForward /> : <ArrowRight />}</ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

)
}

export default HeroSection