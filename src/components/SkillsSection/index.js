import React from 'react'
import { Title } from '../TitleElements'
import SkillBar from '../SkillBar'
import { SkillsContainer, SkillsWrapper, TextWrapper, SkillWrapper} from './SkillsElements'
const Skills = () => {
    return (
        <>
          <SkillsContainer id='skills'>
            <SkillsWrapper>
                <Title bigText={true} lightText={false}>Skills</Title>
                <TextWrapper>Bár nem régóta fogalkozom frontend fejlesztéssel, igyekeztem minél szélesebb körben ismereteket szerezni. Természetesen az alapok, mint a html css és javascript is ismert technológiák számomra, ezen kívül megemlítenék még néhány technológiát, amik az ismereteim részei. Ilyen a React és az Sass amik szintén frontendnél használatosak, továbbá rendelkezem még sitebuilder ismeretekkel is amiket a Figma alkalmazás használata során tudtam elsajátítani.  Valamint jelenleg minimális szinten értek a nodejs-hez és az SQL adatbáziskezelő nyelvhez.</TextWrapper>
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