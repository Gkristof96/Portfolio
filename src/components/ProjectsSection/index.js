import React from 'react'
import { ProjectsContainer, ProjectsWrapper, CardWrapper} from './ProjectElements'
import { Title } from '../TitleElements';
import ProjectCard from '../ProjectCard';
const Projects = () => {
    return (
        <>
          <ProjectsContainer id='projects'>
            <ProjectsWrapper>
                <Title bigText={true} lightText='false'>Projektek</Title>
                <CardWrapper>
                  <ProjectCard url={'https://kristof-weather.netlify.app/'}title={'Weather App'} image={'/images/weather.png'} description={'Időjárás lekérdező alkalmazás, mely megjeleníti az általános használt adatokat, hőmérséklet, páratartalom, szélsebesség. Az adatok forrása az OpenWeather API'}/>
                  <ProjectCard url={'https://kristof-todo.netlify.app/'}title={'Todo App'} image={'/images/todo.png'} description={'Todo Alkalmazás, az elvégzendő feladatok összeírására. Három funcióval, felvehetjük az teendőt, törölhetjük azt, valamint elvégezetnek tekinthetjük.'}/>
                  <ProjectCard url={'https://kristof-gym.netlify.app/'}title={'Gym Site'} image={'/images/gym.png'} description={'Egyszerű weboldal megoldás egy edzőterem számára, edző kártyákkal, árak kártyák, és egy kapcsolat felvevő formal.'}/>
                </CardWrapper>
              </ProjectsWrapper>
          </ProjectsContainer>  
        </>
    )
}

export default Projects