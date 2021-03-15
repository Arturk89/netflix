import React, { createContext, useState } from 'react';
import { users } from '../data/users';

export const UsersContext = createContext();

const UsersProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    const handleLoginUser = (id) => {
        users.filter(user => {
            if(user.id === id){
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
            }
        })
    }

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user')
    }


    return (
        <UsersContext.Provider value={{
            user,
            handleLoginUser,
            logout,
            setUser
        }}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;