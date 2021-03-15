import React, { useContext } from 'react'
import LoginUser from './LoginUser'
import { UsersContext} from '../../../context/UsersContext';
import styled from 'styled-components'
import AddCircleOutlinedIcon from '@material-ui/icons/AddCircleOutlined';

const LoginPage = ({users}) => {

    const { handleLoginUser } = useContext(UsersContext);

    return (
        <LoginContent>
            <NavTitle>
                <ImgLogo
                    src="https://logos-download.com/wp-content/uploads/2016/03/Netflix_logo.png"
                    alt="title"
                ></ImgLogo>
            </NavTitle>
            <TitleHeader>Kto ogląda?</TitleHeader>
            <UserContent>
                {
                    users.map(user => (
                        <LoginUser 
                            key={user.id}
                            id={user.id}
                            name={user.name}
                            avatar={user.avatar}
                            handleLoginUser={handleLoginUser}
                        />
                    ))
                }
                <AddUser>
                    <AddAvatar>
                        <AddCircleOutlinedIcon />
                    </AddAvatar>
                    <TitleUser>Dodaj profil</TitleUser>
                </AddUser>
            </UserContent>
            <BottomConfig>
                <ButtonConfigUsers>Zarządzaj profilami</ButtonConfigUsers>
            </BottomConfig>
        </LoginContent>
    )
}

export default LoginPage

const NavTitle = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 20px;
    height: 30px;
    z-index: 1;
`

const ImgLogo = styled.img`
    position: fixed;
    left: 20px;
    width: 80px;
    object-fit: contain;
`

const LoginContent = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleHeader = styled.p`
    font-size: 3.5rem;
    color: white;
    margin-bottom: 2rem;
`

const UserContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const AddUser = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    :hover > p {
        color: white;
    }
`

const AddAvatar = styled.div`
        width: 10vw;
        height: 10vw;
        display: flex;
        justify-content: center;
        align-items: center;

    >  .MuiSvgIcon-root {
       font-size: 8rem;
       color: #474747;
   }
`

const TitleUser = styled.p`
    color: #474747;
    align-self: center;
    margin-top: 10px;
    font-size: 1.5rem;
    transition: .2s;
`

const BottomConfig = styled.div`
    margin-top: 70px;
`


const ButtonConfigUsers = styled.button`
    padding: 15px 100px;
    background-color: transparent;
    font-size: 1.2rem;
    letter-spacing: 3px;
    border: 1px #474747 solid;
    color: #474747;
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s;

    :hover{
        color: white;
        border-color: white;
    }
`
