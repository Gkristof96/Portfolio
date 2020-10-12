import React from 'react'
import emailjs from 'emailjs-com';
import { CardContainer, Title, Name, Email, Subject, Form, Button } from '../ContactCard/ContactCardElements'

const ContactCard = () => {
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('gmail', 'template_h95q1ua', e.target, 'user_XKwWTJXKqLvBZMOufAXCz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      }
    return (
        <>
            <CardContainer>
                <Title>
                    Írj nekem
                </Title>
                <Form onSubmit={sendEmail}>
                    <Name>
                    </Name>
                    <Email></Email>
                    <Subject name='message'>
                    </Subject >
                    <Button></Button>
                </Form>
            </CardContainer>
        </>
    )
}

export default ContactCard