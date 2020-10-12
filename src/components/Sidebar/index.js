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
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='about'>Rólam</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='projects'>Projektek</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='skills'>Skills</SidebarLinks>
                <SidebarLinks smooth={true} duration={500} spy={true} exact="true" offset={-80} onClick={toggle} to='contact'>Kapcsolat</SidebarLinks>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
)
}

export default Sidebar
