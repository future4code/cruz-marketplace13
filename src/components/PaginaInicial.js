import React from 'react'

export class PaginaInicial extends React.Component {
  render() {
      
    return (
      <div>
        <button onClick={() => this.props.mudarPagina('vendedor')}>Vendedor</button>
        <button onClick={() => this.props.mudarPagina('comprador')}>Comprador</button>
      </div>
    )
  }
}