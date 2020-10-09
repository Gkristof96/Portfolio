import React from 'react'
import { AboutContainer, AboutWrapper, ImageWrapper, TextWrapper, Img } from './AboutElements'
import { Title } from '../TitleElements'
const About = () => {
    return (
        <>
          <AboutContainer id='about'>
            <AboutWrapper>
                <Title bigText={true} lightText={false}>Rólam</Title>
                <ImageWrapper>
                    <Img src='images/me.jpg' alt='me' />
                </ImageWrapper>
                <TextWrapper>Gerencsér Kristóf vagyok, 24 éves Frontend fejlesztő. Jelenleg Zalaegerszegen élek, és Győrben tanulok mint Mérnökinformatikus. Már gyerekkoromtól kezdve érdekeltek a kreatív tevékenységek, ezért is választottam ezt a szakmát magamnak. Amikor éppen nem programozok, vagy sportolók valamit vagy a barátaimmal vagyok, legjobb esetben ezt egyszerre teszem. A sport általában a konditermi edzést jelenti, de nagyon szeretek squasholni és mtb kerékpározni is, amik közben több időt tölthetek a barátaimmal.</TextWrapper>
              </AboutWrapper>
          </AboutContainer>  
        </>
    )
}

export default About