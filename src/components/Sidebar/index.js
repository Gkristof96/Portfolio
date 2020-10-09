import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLinks} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='about'>About</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='projects'>Projects</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='skills'>Skills</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='contact'>Contact</SidebarLinks>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
)
}

export default Sidebar
