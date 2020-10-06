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
                <SidebarLinks to='about'>About</SidebarLinks>
                <SidebarLinks to='projects'>Projects</SidebarLinks>
                <SidebarLinks to='skills'>Skills</SidebarLinks>
                <SidebarLinks to='contact'>Contact</SidebarLinks>
            </SidebarMenu>
        </SidebarWrapper>
    </SidebarContainer>
    </>
)
}

export default Sidebar
