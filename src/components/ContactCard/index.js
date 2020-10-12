import React from 'react'
import emailjs from 'emailjs-com';
import { CardContainer, Title} from '../ContactCard/ContactCardElements'
import '../../Contact.css';

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
                <form onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Név' />
                    <input type='email' name='email' placeholder='Email' />
                    <textarea className='message' name='message' />
                    <input className='btn' type='submit' value='Küldés' />
                </form>
            </CardContainer>
        </>
    )
}

export default ContactCard