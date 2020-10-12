import React from 'react'
import { AboutContainer, AboutWrapper, ImageWrapper, TextWrapper, Img, Description } from './AboutElements'
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
                <TextWrapper>
                  <Description>
                    Üdvözöllek! Gerencsér Kristóf vagyok, egy 24 éves Frontend fejlesztő. 
                    Jelenleg Zalaegerszegen élek, és Győrben tanulok mint Mérnökinformatikus. 
                    Már gyerekkoromtól kezdve érdekeltek a kreatív tevékenységek, 
                    ezért is választottam ezt a szakmát magamnak, és bár nem régóta foglalkozok vele, 
                    folyamatosan próbálom képezni magam hogy jobb és jobb legyek. 
                    Amikor éppen nem programozok akkor vagy a barátaimmal töltöm az időt, 
                    vagy sportolok, esetleg olvasok vagy filmet nézek. 
                    Ha sportolásról van szó általában edzeni szoktam de nagyon szeretem a squasht és a mtb kerékpározást ugyanis ilyenkor a barátaimmal tudok sportolni.
                  </Description>
                </TextWrapper>
              </AboutWrapper>
          </AboutContainer>  
        </>
    )
}

export default About