import React, { useState, useEffect } from 'react'
import { Nav, NavbarContainer, NavLogo, HamburgerIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'
import { FaBars } from 'react-icons/fa'
const Navbar = ({toggle}) => {
    const [scroll, setScroll] = useState(false);

    const  changeNav = () => {
        if(window.scrollY >= 100) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',changeNav)
    },[])
    return (
        <>
        <Nav scroll={scroll}>
            <NavbarContainer>
                <NavLogo to='/'>
                    Kristóf's Site
                </NavLogo>
                <HamburgerIcon onClick={toggle}>
                    <FaBars />
                </HamburgerIcon>
                <NavMenu>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-100} to='about'>About</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-100} to='projects'>Projects</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-100} to='skills'>Skills</NavLinks></NavItem>
                    <NavItem><NavLinks smooth={true} duration={500} spy={true} exact="true" offset={-100} to='contact'>Contact</NavLinks></NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar