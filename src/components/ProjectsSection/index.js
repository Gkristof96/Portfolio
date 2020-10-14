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
                  <ProjectCard url={'https://kristof-weather.netlify.app/'}title={'Weather App'} image={'/images/weather.png'} description={'Időjárás lekérdező alkalmazás, amely képes megmutatni az aktuális időjárási viszonyokat településenként. Az adatok forrása az OpenWeather Api.'}/>
                  <ProjectCard url={'https://kristof-todo.netlify.app/'}title={'Todo App'} image={'/images/todo.png'} description={'Feladatlista a teendőink összeírására, egyszerű kezelőfelülettel. Három alapvető funkcióval, ezek a feladat hozzáadása, törlése, és becsekkolása'}/>
                  {/*<ProjectCard url={'https://kristof-gym.netlify.app/'}title={'Gym Site'} image={'/images/gym.png'} description={'Egyszerű egylapos weboldal megoldás egy fiktiv edzőterem számára. Az oldal tartalmaz egy reszponzív navigációs menüt, informácios kártyákat, és egy kapcsolat formot.'}/>*/}
                </CardWrapper>
              </ProjectsWrapper>
          </ProjectsContainer>  
        </>
    )
}

export default Projects