import React,{useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import {IconContext} from 'react-icons/lib'
import {Nav,NavBarContainer,NavLogo, MobileIcon,
    NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,
    NavBtnLinkVar} from './NavBarElements'

const NavBar = ({ toggle }) => {
    const [scrollNav,setScrollNav] = useState(false)

    const changeNav=()=>{
        if(window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener("scroll",changeNav)
    })

    const toggleHome = () =>{
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavBarContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Dollar
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                About
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                Discover
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                Services
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="signup" smooth={true} duration={1000} spy={true} exact='true' offset={-80}>
                                Sign up
                        </NavBtnLink>
                        <NavBtnLinkVar to="/signin">Sign In
                        </NavBtnLinkVar>
                    </NavBtn>
                </NavBarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    )
}

export default NavBar;