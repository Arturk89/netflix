import React, { useEffect, useState, useContext } from 'react'
import Navbar from './components/Navbar';

import { UsersContext } from '../../context/UsersContext';


const NavbarContainer = () => {

    const [show, handleShow] = useState(false);
    const { logout, user } = useContext(UsersContext);
    const [isOption, setIsOption] = useState(false);

    const setOptionsCloud = () => {
        setIsOption(!isOption)
    }


    useEffect(() => {
       const id =  window.addEventListener("scroll", () => {
            if(window.scrollY > 100){
                handleShow(true)
            }else{
                handleShow(false)
            }
        });

        const idScroll = window.addEventListener("scroll", () => {
            setIsOption(false);
        })
        return () => {
            window.removeEventListener('scroll', id)
            window.removeEventListener('scroll', idScroll)
        }
    }, [])

    return <Navbar
            setOptionsCloud={setOptionsCloud} 
            show={show} 
            logout={logout} 
            user={user} 
            isOption={isOption} 
            logout={logout}
            />
}

export default NavbarContainer