import React from 'react'
import styled from "styled-components"

export default class Footer extends React.Component {
    render() {
        return (
    <FooterDiv>
			<NomeEmpresa>Futurecar ©</NomeEmpresa>
			<Atendimento>Atendimento: 9999-9999</Atendimento>
			<Horario>Segunda a sexta, das 8h às 20h Sábado e feriados, das 8h30 às 15h30</Horario>
			<Links>Trabalhe com a gente Política de Privacidade Termos de Uso </Links>
	</FooterDiv>
        );
    }
}

const FooterDiv = styled.div`
position: absolute;
width: 100%;
height: 221px;
left: 0px;
top: 1404px;

background: #495AF6;
`

const NomeEmpresa = styled.p`
position: absolute;
width: 159px;
height: 33px;
left: 13px;
top: 0px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #000000;

`

const Atendimento = styled.p`
position: absolute;
width: 337px;
height: 36px;
left: 13px;
top: 35px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #000000;

`

const Horario = styled.p`
position: absolute;
width: 486px;
height: 81px;
left: 463px;
top: 0px;

font-family: 'Poppins', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #000000;
`
const Links = styled.p`
position: absolute;
width: 304px;
height: 187px;
left: 1041px;
top: 0px;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 37px;

color: #000000;
`