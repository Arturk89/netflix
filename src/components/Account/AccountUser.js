import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const AccountUser = () => {

    let history = useHistory();

    const GoBackToDashboard = () => {
        history.push("/");
    }

    return (
        <AccountUserContent>
            <AccountContent>
                <HrAccount></HrAccount>
                <BackArrowStyled onClick={GoBackToDashboard}>
                    <ArrowBackIcon />
                </BackArrowStyled>
                <TitleAccount>Hi, Here is your film list...</TitleAccount>
            </AccountContent>
        </AccountUserContent>
    )
}

export default AccountUser

const AccountUserContent = styled.div`
    width: 100%;
    height: 100vh;
`

const BackArrowStyled = styled.div`
    cursor: pointer;
    border: 3px solid #474747;
    width: 80px;
    height: 80px;
    margin-top: 15px;
    margin-left: 10px;
    border-radius: 49%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: .2s;

    > .MuiSvgIcon-root{
        color: #474747;
        font-size: 3rem;
        margin: 20px;
        transition: .2s;
    }

    :hover {
        border-color: #ccc;
    }

    :hover > .MuiSvgIcon-root {
        color: #ccc;
    }
   
`

const AccountContent = styled.div`
    padding-top: 70px;

`

const HrAccount = styled.div`
    border-top: 1px solid red;
`

const TitleAccount = styled.h2`
    color: white;
    text-align: center;
`
