import React from 'react'
import { FooterContainer, FooterWrapper, CopyRight, Logo, FooterMenu} from './FooterElements'
import { NavLinks, NavItem } from '../Navbar/NavbarElements'
const Footer = ()=> {
    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <Logo>Kristóf</Logo>
                    <FooterMenu>
                        <NavItem><NavLinks to='about'>About</NavLinks></NavItem>
                        <NavItem><NavLinks to='projects'>Projects</NavLinks></NavItem>
                        <NavItem><NavLinks to='skills'>Skills</NavLinks></NavItem>
                        <NavItem><NavLinks to='contact'>Contact</NavLinks></NavItem>
                    </FooterMenu>
                </FooterWrapper>
            </FooterContainer>
            <CopyRight>CopyRight © Kristof - 2020</CopyRight>
        </>
    )
}

export default Footer