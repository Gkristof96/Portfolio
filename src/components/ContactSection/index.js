import React from 'react'
import { ContactContainer, ContactWrapper, TextWrapper} from './ContactElements'
import { Title } from '../TitleElements'
import ContactCard from '../ContactCard'
const Contact = () => {
    return (
        <>
          <ContactContainer id='contact'>
              <ContactWrapper>
                  <Title bigText={true} lightText={true}>Contact Me</Title>
                  <TextWrapper>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</TextWrapper>
                  <ContactCard />
              </ContactWrapper>
          </ContactContainer>  
        </>
    )
}

export default Contact