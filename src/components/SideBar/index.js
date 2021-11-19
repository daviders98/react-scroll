import React from 'react'
import {SideBarContainer,Icon,CloseIcon,
SideBarWrapper, SideBarMenu,SideBarLink,SideBtnWrap,
SideBarRoute,SideBarLinkVar} from './SideBarElements'

const SideBar = ({isOpen,toggle}) => {
    return (
        <SideBarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>    
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <SideBarLink to="about" onClick={toggle}>
                        About
                    </SideBarLink>
                    <SideBarLink to="discover" onClick={toggle}>
                        Discover
                    </SideBarLink>
                    <SideBarLink to="services" onClick={toggle}>
                        Services
                    </SideBarLink>
                    <SideBarLinkVar to="/signin">
                        Sign In
                    </SideBarLinkVar>
                </SideBarMenu>
                <SideBtnWrap>
                    <SideBarRoute to="signup" onClick={toggle}>
                        Sign Up
                    </SideBarRoute>
                </SideBtnWrap>
            </SideBarWrapper>
        </SideBarContainer>
    )
}

export default SideBar