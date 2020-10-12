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
                <HeroH1>Üdvözöllek az oldalamon!</HeroH1>
                <HeroP>Itt megismerhetsz hogy ki is vagyok, valamint láthatod néhány korábbi projektem.</HeroP>
                <HeroBtnWrapper>
                    <ButtonS
                    smooth={true} duration={500} spy={true} exact="true" offset={-100}
                    primary={true}
                    big={true}
                    dark={true}
                    rounded={true}
                    onMouseEnter={onHover} onMouseLeave={onHover} to='projects'>Tudj meg többet{hover ? <ArrowForward /> : <ArrowRight />}</ButtonS>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>

)
}

export default HeroSection