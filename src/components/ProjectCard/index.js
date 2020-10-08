import React from 'react'
import { ButtonR } from '../ButtonElements'
import { Title } from '../TitleElements'
import { CardContainer, Img, Description} from './ProjectCardElements'

const ProjectCard = ({title, image, description}) => {
    return (
        <>
            <CardContainer>
                <Title lightText={false} bigText={false}>{title}</Title>
                <Img src={image}/>
                <Description>{description}</Description>
                <ButtonR 
                    primary={true}
                    big={true}
                    dark={true}
                    to='/project'>
                    See More
                </ButtonR>
            </CardContainer>
        </>
    )
}

export default ProjectCard