import React from "react";
import styled from "styled-components";

export default class Footer extends React.Component {
  render() {
    return (
      <MainContainer>
        <div>
          <p>Futurecar ©</p>
          <p>Atendimento: (00) 9999-9999</p>
          <p>Segunda a sexta: das 8h às 20h;</p>
          <p>Sábado e feriados: das 8h30 às 15h30</p>
        </div>
      </MainContainer>
    );
  }
}

const MainContainer = styled.header`
  background-color: #a8a6a6;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 100px;
  box-shadow: 1px 1px 8px rgba(0, 0, 0, 0.5);
  p {
    font-weight: bolder;
    &:hover {
      color: #495af6;
    }
  }
`;
