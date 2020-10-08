import React from 'react'
import { CardContainer, Title, Name, Email, Subject, Form, Button } from '../ContactCard/ContactCardElements'

const ContactCard = () => {
    return (
        <>
            <CardContainer>
                <Title>
                    Contact Me
                </Title>
                <Form>
                    <Name>
                    </Name>
                    <Email></Email>
                    <Subject>
                    </Subject>
                    <Button></Button>
                </Form>
                
            </CardContainer>
        </>
    )
}

export default ContactCard