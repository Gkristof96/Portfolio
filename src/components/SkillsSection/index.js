import React from 'react'
import { Title } from '../TitleElements'
import SkillBar from '../SkillBar'
import { SkillsContainer, SkillsWrapper, TextWrapper, SkillWrapper} from './SkillsElements'
const Skills = () => {
    return (
        <>
          <SkillsContainer>
            <SkillsWrapper>
                <Title bigText={true} lightText={false}>My Skills</Title>
                <TextWrapper>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</TextWrapper>
                <SkillWrapper>
                  <SkillBar title={'Html'} percent={'90%'}></SkillBar>
                  <SkillBar title={'Css'} percent={'70%'}></SkillBar>
                  <SkillBar title={'Sass'} percent={'60%'}></SkillBar>
                  <SkillBar title={'Javascript'} percent={'60%'}></SkillBar>
                  <SkillBar title={'React'} percent={'65%'}></SkillBar>
                </SkillWrapper>
              </SkillsWrapper>
          </SkillsContainer>  
        </>
    )
}

export default Skills