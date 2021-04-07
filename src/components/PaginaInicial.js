import React from "react";
import styled from "styled-components";
import Carro from "./image.png";

export class PaginaInicial extends React.Component {
  render() {
    return (
      <MainContainer>
        <SubContainer>
          <h1>FutureCar</h1>
          <h2>
            Compre ou venda seu carro pelo <span>melhor preço</span> do mercado
          </h2>
          <ButtonSell
            onClick={() => {
              this.props.mudarPagina("vendedor");
            }}
          >
            Quero Vender
          </ButtonSell>
          <ButtonBuy
            onClick={() => {
              this.props.mudarPagina("comprador");
            }}
          >
            Quero Comprar
          </ButtonBuy>
        </SubContainer>
        <Image src={Carro} />
      </MainContainer>
    );
  }
}

const Image = styled.img`
  width: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const ButtonBuy = styled.button`
  margin: 10px;
  height: 50px;
  width: 110px;
  background-color: #a8b2ff;
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
    color: white;
  }
`;

const ButtonSell = styled.button`
  margin: 10px;
  height: 50px;
  width: 110px;
  background-color: #a8a6a6;
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
    color: white;
  }
`;

const MainContainer = styled.div`
  padding: 0px 100px;
  font-family: "Poppins";
  display: flex;
  justify-content: space-around;
  flex: 1;
`;
const SubContainer = styled.div`
  font-family: "Poppins";
  margin-top: 100px;
  width: 400px;
  span {
    color: #a8b2ff;
  }
`;
