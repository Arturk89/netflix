import React, {useEffect, useContext} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { UsersContext} from './context/UsersContext';
import Banner from './components/Banner/BannerContainer';
import Navbar from './components/Navbar//NavbarContainer'
import Main from './components/Main/MainContainer'
import AccountUser from './components/Account/AccountUser';
import Login from './components/Login/LoginContainer';
import styled from 'styled-components';

function App() {

  const { user, setUser } = useContext(UsersContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
      setUser(user);
    }
    return () => {
      localStorage.removeItem('user');

    }
  }, [])

  return (
    <AppContainer>
        <Router>
          {
            user ? (
              <>
              <Switch>
  
                <Route path="/" exact>
                  <Navbar />
                  <Banner />
                  <Main />
                </Route>
                <Route path="/account">
                  <Navbar />  
                  <AccountUser />
                </Route>
              </Switch>
              </>
            ) : (
              <Login />
            )
          }
        </Router>

    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  background-color: #111;
`

