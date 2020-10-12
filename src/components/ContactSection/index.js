import React from 'react'
import { ContactContainer, ContactWrapper, TextWrapper, Description, Mail, City} from './ContactElements'
import { Title } from '../TitleElements'
import ContactCard from '../ContactCard'
import { FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa'

const Contact = () => {
    return (
        <>
          <ContactContainer id='contact'>
              <ContactWrapper>
                  <Title bigText={true} lightText={true}>Kapcsolat</Title>
                        <TextWrapper>
                            <Description>Ha megtetszettek a korábbi munkáim, esetleg érdekesnek találtál engem, vagy más egyéb okból szeretnél felkeresni akkor nyugodtan írj nekem üzenetet. Erre remek lehetőséged van az itt található form segítsével.</Description>
                            <Mail><FaEnvelope />{`  kristef.g@gmail.com`}</Mail>
                            <City><FaMapMarkerAlt />{`  Zalaegerszeg`}</City>
                        </TextWrapper>
                  <ContactCard />
              </ContactWrapper>
          </ContactContainer>  
        </>
    )
}

export default Contact