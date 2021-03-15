import React from 'react'
import LoginPage from './components/LoginPage';
import { users } from '../../data/users'


const LoginContainer = () => {
    
    return (
        <LoginPage users={users}/>
    )
}

export default LoginContainer
