import React from 'react'
import { ProjectsContainer, ProjectsWrapper, CardWrapper} from './ProjectElements'
import { Title } from '../TitleElements';
import ProjectCard from '../ProjectCard';
const Projects = () => {
    return (
        <>
          <ProjectsContainer id='projects'>
            <ProjectsWrapper>
                <Title bigText={true} lightText='false'>My Projects</Title>
                <CardWrapper>
                  <ProjectCard title={'Weather App'} image={'/images/weather.png'} description={'Lorem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur'}/>
                  <ProjectCard title={'Todo App'} image={'/images/todo.png'} description={'Lorem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur'}/>
                  <ProjectCard title={'Gym Site'} image={'/images/gym.png'} description={'Lorem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur megbanosus elirusz orem sit amen dolores igitur'}/>
                </CardWrapper>
              </ProjectsWrapper>
          </ProjectsContainer>  
        </>
    )
}

export default Projects