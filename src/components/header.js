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
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.9);
  transition: 500ms;
  cursor: pointer;
  &:hover {
    box-shadow: none;
    color: #495af6;
  }
`;
const MainContainer = styled.header`
  background-color: #a8b2ff;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 100px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.4); 
`;
const Logo = styled.img`
  height: 60px;

`;
