import React from 'react'
import styled from "styled-components"
import logo from "./logo.png"

export default class Header extends React.Component {
    render() {
        return (
        <HeaderDiv>
          <Logo src={logo} alt="some text" height="40px" ></Logo>
            <Menu>
                <span>Home |</span>
                <span> vendedor |</span>
                <span> comprar</span>
            </Menu>
         </HeaderDiv>
        );
    }
}

const HeaderDiv = styled.header`
background-color: rgba(73, 90, 246, 1);
height: 50px;
`
const Logo = styled.img`
padding: 5px;
`

const Menu = styled.div`
position: absolute;
width: 356px;
height: 36px;
left: 212px;
top: 7px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #FFFFFF;
`
const Footer = styled.footer`
position: absolute;
width: 100%;
height: 221px;
left: 0px;
top: 1404px;

background: #495AF6;

`