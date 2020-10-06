import React from 'react'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
const Navbar = ({toggle}) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Kristóf's Site
                </NavLogo>
                <HamburgerIcon onClick={toggle}>
                    <FaBars />
                </HamburgerIcon>
                <NavMenu>
                    <NavItem><NavLinks to='about'>About</NavLinks></NavItem>
                    <NavItem><NavLinks to='projects'>Projects</NavLinks></NavItem>
                    <NavItem><NavLinks to='skills'>Skills</NavLinks></NavItem>
                    <NavItem><NavLinks to='contact'>Contact</NavLinks></NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar