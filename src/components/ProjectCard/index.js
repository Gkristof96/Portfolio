import React from 'react'
import { Title } from '../TitleElements'
import { CardContainer, Img, Description, Button} from './ProjectCardElements'

const ProjectCard = ({title, image, description, url}) => {
    return (
        <>
            <CardContainer>
                <Title lightText={false} bigText={false}>{title}</Title>
                <Img src={image}/>
                <Description>{description}</Description>
                <Button 
                    primary={true}
                    big={true}
                    dark={true}
                    href={url}>
                    Tudj meg többet
                </Button>
            </CardContainer>
        </>
    )
}

export default ProjectCard