import React from 'react'
import styled from 'styled-components';
import CloudOption from './CloudOption';

const Navbar = ({show, logout, user, isOption, setOptionsCloud}) => {

    const NavbarContent = styled.nav`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 30px;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    transition-timing-function: ease-in;
    transition: all 0.5s;
    background-color: ${show ? '#111' : 'transparent'};
    `


    return (
        <NavbarContent>
            <ImgLogo 
                src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
                alt="Netflix Logo"
            />
            <RightSideMenu>
                <TitleUser>
                    Hello <strong>{user?.name}</strong>
                </TitleUser>
                <ImgAvatar 
                    onClick={setOptionsCloud}
                    src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"
                    alt="Netflix Avatar"
                />
                {isOption && <CloudOption logout={logout} setOptionsCloud={setOptionsCloud} />}
            </RightSideMenu>
        </NavbarContent>
    )
}

export default Navbar


const ImgLogo = styled.img`
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
`

const RightSideMenu = styled.div`
    position: fixed;
    right: 20px;
    display: flex;
    align-items: center;
`
const TitleUser = styled.p`
    color: white;
    margin-right: 20px;
`
const ImgAvatar = styled.img`
    width: 35px;
    object-fit: contain;
    cursor: pointer;
`


