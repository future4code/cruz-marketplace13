import React from "react";
import { PaginaComprador } from "./components/PaginaComprador";
import { PaginaVendedor } from "./components/PaginaVendedor";
import { PaginaInicial } from "./components/PaginaInicial";
import Header from "./components/header";
import Footer from "./components/footer";
import styled from "styled-components";

export default class App extends React.Component {
  state = {
    pagina: "inicial"
  };

  mudarPagina = (novaPagina) => {
    this.setState({ pagina: novaPagina });
  };

  renderizarPagina = () => {
    if (this.state.pagina === "inicial") {
      return <PaginaInicial mudarPagina={this.mudarPagina} />;
    } else if (this.state.pagina === "vendedor") {
      return <PaginaVendedor />;
    } else if (this.state.pagina === "comprador") {
      return <PaginaComprador />;
    }
  };

  render() {
    return (
      <MainContainer>
        <Header mudarPagina={this.mudarPagina} />
        {this.renderizarPagina()}
        <Footer />
      </MainContainer>
    );
  }

}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
