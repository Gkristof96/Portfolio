import React from 'react'
import { AboutContainer, AboutWrapper, TextWrapper, Row, Column1, Column2, Header, Description, ImgWrapper, Img } from './AboutElements'
const About = () => {
    return (
        <>
          <AboutContainer>
            <AboutWrapper>
                  <Row>
                      <Column1>
                        <TextWrapper>
                            <Header>
                                About me
                            </Header>
                            <Description>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </Description>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrapper>
                            <Img src='/images/me.jpg'/>
                        </ImgWrapper>
                      </Column2>
                  </Row>
              </AboutWrapper>
          </AboutContainer>  
        </>
    )
}

export default About