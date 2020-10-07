import React from 'react'
import { Button } from '../ButtonElements'
import { Title } from '../TitleElements'
import { CardContainer, Img, Description} from './ProjectCardElements'

const ProjectCard = ({title, image, description}) => {
    return (
        <>
            <CardContainer>
                <Title lightText={false} bigText={false}>{title}</Title>
                <Img src={image}/>
                <Description>{description}</Description>
                <Button 
                    primary={true}
                    big={true}
                    dark={true}>
                    See More
                </Button>
            </CardContainer>
        </>
    )
}

export default ProjectCard