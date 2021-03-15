import React from 'react'
import {Link} from 'react-router-dom';
import styled from 'styled-components'

const CloudOption = ({logout, setOptionsCloud}) => {
    return (
        <OptionContainer>
            <Link to="/account" onClick={setOptionsCloud}>My account</Link>
            <Link to="" onClick={logout}>Logout</Link>
        </OptionContainer>
    )
}

export default CloudOption

const OptionContainer = styled.div`
    position: fixed;
    top: 60px;
    right: 20px;
    background-color: #222;
    color: white;
    padding: 0 20px 20px 20px;

    > a {
        color: white;
        text-decoration: none;
        display: block;
        margin-top: 20px;

        :hover {
            color: #999;
        }
    }
`


