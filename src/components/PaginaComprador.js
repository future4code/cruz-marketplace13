import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
`;
const Filtros = styled.div`
  background: #495af6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 15px 95px;
  font-family: "Poppins", sans-serif;
  border-radius: 20px;

  label {
    font-size: 20px;
  }
  select {
    height: 40px;
    border-radius: 15px;
    outline: none;
    border: none;
    margin: 10px;
    font-family: "Poppins", sans-serif;
  }

  input {
    height: 40px;
    outline: none;
    border: none;
    margin: 10px;
    border-radius: 15px;
    font-family: "Poppins", sans-serif;
  }
`;

export class PaginaComprador extends React.Component {
  state = {
    carros: [],
    inputMinimo: "",
    inputMaximo: "",
    inputNome: "",
    ordernarPor: "nome",
    ordem: "crescente",
  };

  componentDidMount() {
    this.pegarCarros();
  }

  pegarCarros = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarThree/cars"
      );
      this.setState({ carros: response.data.cars });
    } catch (error) {
      console.log(error);
    }
  };

  inputMinimo = (event) => {
    this.setState({ inputMinimo: event.target.value });
  };

  inputMaximo = (event) => {
    this.setState({ inputMaximo: event.target.value });
  };

  inputNome = (event) => {
    this.setState({ inputNome: event.target.value });
  };

  ordenarPor = (event) => {
    this.setState({ ordernarPor: event.target.value.toLowerCase() });
  };

  ordem = (event) => {
    this.setState({ ordem: event.target.value.toLowerCase() });
  };

  render() {
    const listaFiltrada = this.state.carros.filter((carro) => {
      if (
        this.state.inputMinimo !== "" &&
        carro.price < this.state.inputMinimo
      ) {
        return false;
      } else if (
        this.state.inputMaximo !== "" &&
        carro.price > this.state.inputMaximo
      ) {
        return false;
      } else if (
        this.state.inputNome !== "" &&
        !carro.name.toLowerCase().includes(this.state.inputNome.toLowerCase())
      ) {
        return false;
      } else {
        return true;
      }
    });

    listaFiltrada.sort((a, b) => {
      if (this.state.ordernarPor === "preço") {
        return a.price - b.price;
      } else if (this.state.ordernarPor === "prazo de entrega") {
        return a.shipping - b.shipping;
      } else if (this.state.ordernarPor === "nome") {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return -1;
        }
        return 0;
      }
    });

    if (this.state.ordem === "decrescente") {
      listaFiltrada.reverse();
    }

    return (
      <MainContainer>
        <div>
          <Filtros>
            <label>Filtrar por: </label>
            <select onChange={this.ordenarPor}>
              <option>Nome</option>
              <option>Preço</option>
              <option>Prazo De Entrega</option>
            </select>

            <label>Ordem: </label>
            <select onChange={this.ordem}>
              <option>Crescente</option>
              <option>Decrescente</option>
            </select>
          </Filtros>
          <Filtros>
            <label>Pesquisar por:</label>
            <input onChange={this.inputMinimo} placeholder="Valor Mínimo" />
            <input onChange={this.inputMaximo} placeholder="Valor Máximo" />
            <input onChange={this.inputNome} placeholder="Buscar Por Nome" />
          </Filtros>
        </div>
        <Section>
          {listaFiltrada.map((carro) => {
            return (
              <CardCarro key={carro.id}>
                <img src={carro.link} alt="carro" />

                <Name>
                  <span>{carro.name}</span>
                </Name>

                <Description>
                  <span>{carro.description}</span>
                </Description>

                <Price>
                  <span>R$ {carro.price}</span>
                </Price>

                <div>
                  <Shipping>
                    <span>Entrega: {carro.shipping} dias</span>
                  </Shipping>

                  <PaymentMethod>
                    <span>{carro.paymentMethod}</span>
                  </PaymentMethod>
                </div>
              </CardCarro>
            );
          })}
        </Section>
      </MainContainer>
    );
  }
}
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 13px;
`;

const CardCarro = styled.div`
  width: 400px;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #495af6;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    height: 370px;
    object-fit: fill;
    border-radius: 4px;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    margin-bottom: 13px;
  }
  > div {
    display: flex;
    width: 100%;
    justify-content: space-between;
    span {
      margin: 0 1rem;
    }
  }
  span {
    background: white;
    padding: 0.7rem 0.9rem;
    border-radius: 15px;
  }
`;

const Name = styled.p``;

const Description = styled.p``;

const Price = styled.p``;

const PaymentMethod = styled.p``;

const Shipping = styled.p``;
