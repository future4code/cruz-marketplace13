import React from 'react'
import styled from "styled-components"

export class PaginaInicial extends React.Component {
  render() {
      
    return (
      <ConteinerBotao>
        <ButtonVendedor onClick={() => this.props.mudarPagina('vendedor')}>Vendedor</ButtonVendedor>
        <ButtonComprador onClick={() => this.props.mudarPagina('comprador')}>Comprador</ButtonComprador>
      </ConteinerBotao>
    )
  }
}

const ConteinerBotao = styled.div`
position: absolute;
width: 822px;
height: 203px;
left: 272px;
top: 92px;

background: #495AF6;

`

const ButtonVendedor = styled.button`
position: absolute;
width: 207px;
height: 89px;
left: calc(50% - 207px/2 - 218.5px);
top: 25%;

background: #B7BEFA;
border-radius: 26px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 37px;
text-align: center;

color: #000000;


`

const ButtonComprador = styled.button`
position: absolute;
width: 207px;
height: 89px;
left: 525px;
top: 25%;

background: #B7BEFA;
border-radius: 26px;

font-family: Poppins;
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 37px;
text-align: center;

color: #000000;

`