import React from 'react'
import styled from 'styled-components'

const LoginUser = ({id, name, avatar, handleLoginUser}) => {

    return (
        <UserBox onClick={() => handleLoginUser(id)}>
            <UserAvatar>
                <ImgAvatar src={avatar} alt="user" />
            </UserAvatar>
            <TitleUser>{name}</TitleUser>
        </UserBox>
    )
}

export default LoginUser

const UserBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 50px;
    cursor: pointer;

    :hover > p {
        color: white;
    }
`

const UserAvatar = styled.div`
        width: 10vw;
        height: 10vw;
        border-radius: 10px;
        overflow: hidden;
        
`

const ImgAvatar = styled.img`
    width: 100%;
`

const TitleUser = styled.p`
    color: #474747;
    align-self: center;
    margin-top: 10px;
    font-size: 1.7rem;
    transition: .2s;
`
