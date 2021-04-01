import React from 'react'
import styled from "styled-components"
import logo from "./logo.png"

export default class Header extends React.Component {
    render() {
        return (
        <HeaderDiv>
          <Logo src={logo} alt="some text" height="40px" ></Logo>
            <div>
                <Home className={HomeBotão} >Home</Home>
                <Barra1>|</Barra1>
                <Vendedor className={VendedorBotão} >vendedor</Vendedor>
                <Barra2>|</Barra2>
                <Comprador className={ComprarBotão} >comprar</Comprador>
            </div>
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

const Barra1 = styled.span`
position: absolute;
width: 7px;
height: 36px;
left: 311px;
top: 7px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
text-align: right;

color: #FFFFFF;

`

const Barra2 = styled.span`
position: absolute;
width: 7px;
height: 36px;
left: 453px;
top: 7px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
text-align: right;

color: #FFFFFF;
`

const Home = styled.span`
position: absolute;
width: 76px;
height: 36px;
left: 230px;
top: 7px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;
text-align: center;

color: #FFFFFF;
`

const Vendedor = styled.span`
position: absolute;
width: 125px;
height: 36px;
left: 323px;
top: 7px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #FFFFFF;
`

const Comprador = styled.span`
position: absolute;
width: 147px;
height: 36px;
left: 465px;
top: 7px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #FFFFFF;
`