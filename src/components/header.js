import React from "react";
import styled from "styled-components";
import logo from "./logo2.png";

export default class Header extends React.Component {
  render() {
    return (
      <MainContainer>
        <Logo src={logo} alt="logo"></Logo>
        <div>
          <Button onClick={() => this.props.mudarPagina("inicial")}>
            Home
          </Button>
          <Button onClick={() => this.props.mudarPagina("vendedor")}>
            Vendedor
          </Button>
          <Button onClick={() => this.props.mudarPagina("comprador")}>
            Comprador
          </Button>
        </div>
      </MainContainer>
    );
  }
}

const Button = styled.button`
  margin: 10px;
  height: 50px;
  width: 110px;
  border-radius: 10px;
  border: none;
  outline: none;
  font-family: "Poppins";
  font-size: 15px;
  cursor: pointer;
  &:hover {
    color: #495af6;
  }
`;
const MainContainer = styled.header`
  background-color: #a8b2ff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;
const Logo = styled.img`
  height: 60px;
`;
