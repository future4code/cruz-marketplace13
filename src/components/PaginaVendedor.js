import React from "react";
import axios from "axios";
import styled from "styled-components";

const MainContainer = styled.div`
  padding: 0px 100px;
  font-family: "Poppins";
  display: flex;
  justify-content: space-between;
  flex: 1;
`;

const Formulario = styled.div`
  background: #495af6;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 250px;
  margin: 15px 95px;
  font-family: "Poppins", sans-serif;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  flex: 1;

  label {
    font-size: 20px;
  }
  select {
    height: 40px;
    border-radius: 20px;
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
    border-radius: 10px;
    font-family: "Poppins", sans-serif;
  }
`;

const FormButton = styled.button`
  margin: 5px 190px;
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

const Image = styled.img`
  width: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

const CardCarro = styled.div`
  margin: 13px;
  width: 400px;
  border: 2px solid #e7e7e7;
  border-radius: 4px;
  padding: 0.5rem;
  background-color: #495af6;
  font-family: Poppins;
  font-size: 13px;
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
  }
  span {
    margin: 20px;
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

export class PaginaVendedor extends React.Component {
  state = {
    name: "",
    description: "",
    price: "",
    paymentMethod: "",
    shipping: "",
    link: ""
  };

  inputCarro = (event) => {
    this.setState({ name: event.target.value });
  };

  inputDescricao = (event) => {
    this.setState({ description: event.target.value });
  };

  inputPreco = (event) => {
    this.setState({ price: event.target.value });
  };

  inputMeioDePagamento = (event) => {
    this.setState({ paymentMethod: event.target.value });
  };

  inputPrazo = (event) => {
    this.setState({ shipping: event.target.value });
  };

  inputLink = (event) => {
    this.setState({ link: event.target.value });
  };

  criarProduto = async () => {
    if (
      this.state.name === "" ||
      this.state.description === "" ||
      this.state.price === "" ||
      this.state.paymentMethod === "" ||
      this.state.shipping === "" ||
      this.state.link === ""
    ) {
      alert("Todos os campos devem ser preenchidos");
      return;
    }

    const body = {
      name: this.state.name,
      description: this.state.description,
      price: this.state.price,
      paymentMethod: this.state.paymentMethod,
      shipping: this.state.shipping,
      link: this.state.link
    };

    try {
      await axios.post(
        "https://us-central1-labenu-apis.cloudfunctions.net/futureCarThree/cars ",
        body
      );
      this.setState({
        name: "",
        description: "",
        price: "",
        paymentMethod: "",
        shipping: "",
        link: ""
      });
      alert("Oferta criada com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <MainContainer>
          <Formulario>
            <label>Criar Anúncio</label>
            <input
              placeholder="Carro"
              value={this.state.name}
              onChange={this.inputCarro}
            />
            <input
              placeholder="Descrição"
              value={this.state.description}
              onChange={this.inputDescricao}
            />
            <input
              placeholder="Preço"
              value={this.state.price}
              onChange={this.inputPreco}
            />
            <input
              placeholder="Meio de Pagamento"
              value={this.state.paymentMethod}
              onChange={this.inputMeioDePagamento}
            />
            <input
              placeholder="Prazo de Entrega"
              value={this.state.shipping}
              onChange={this.inputPrazo}
            />
            <input
              placeholder="Link"
              value={this.state.link}
              onChange={this.inputLink}
            />
            <FormButton onClick={this.criarProduto}>Criar</FormButton>
          </Formulario>
          <CardCarro>
            <img src="https://picsum.photos/400/401" alt="carro" />

            <Name>
              <span>Nome</span>
            </Name>

            <Description>
              <span>Descrição</span>
            </Description>

            <Price>
              <span>R$xx</span>
            </Price>

            <div>
              <Shipping>
                <span>Entrega: xx dias</span>
              </Shipping>

              <PaymentMethod>
                <span>Método de Pagamento</span>
              </PaymentMethod>
            </div>
          </CardCarro>
        </MainContainer>
      </div>
    );
  }
}
