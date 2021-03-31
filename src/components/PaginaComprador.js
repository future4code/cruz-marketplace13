import React from 'react'
import axios from 'axios'

export class PaginaComprador extends React.Component {

    state = {
        carros: [],
        inputMinimo: '',
        inputMaximo: '',
        inputNome: '',
        ordernarPor: 'nome',
        ordem: 'crescente'
    }

    componentDidMount() {
        this.pegarCarros()
    }

    pegarCarros = async () => {
        try {
            const response = await axios.get("https://us-central1-labenu-apis.cloudfunctions.net/futureCarThree/cars")
            this.setState({ carros: response.data.cars })
        }
        catch (error) {
            console.log(error)
        }
    }

    inputMinimo = (event) => {
        this.setState({inputMinimo: event.target.value})
    }

    inputMaximo = (event) => {
        this.setState({inputMaximo: event.target.value})
    }

    inputNome = (event) => {
        this.setState({inputNome: event.target.value})
    }

    ordenarPor = (event) => {
        this.setState({ordernarPor: event.target.value.toLowerCase()})
    }

    ordem = (event) => {
        this.setState({ordem: event.target.value.toLowerCase()})
    }

  render() {

    const listaFiltrada = this.state.carros.filter(carro => {
        if (this.state.inputMinimo !== '' && carro.price < this.state.inputMinimo) {
            return false
        }
        else if (this.state.inputMaximo !== '' && carro.price > this.state.inputMaximo) {
            return false
        }
        else if (this.state.inputNome !== '' && !carro.name.toLowerCase().includes(this.state.inputNome.toLowerCase())) {
            return false
        }
        else {
            return true
        }
    })

    listaFiltrada.sort((a , b) => {
        if (this.state.ordernarPor === 'preço') {
            return a.price - b.price
        }
        else if (this.state.ordernarPor === 'prazo de entrega') {
            return a.shipping - b.shipping
        }
        else if (this.state.ordernarPor === 'nome') {
            if (a.name > b.name) {
                return 1
              }
              if (a.name < b.name) {
                return -1
              }
              return 0
        }
    })

    if (this.state.ordem === 'decrescente') {
        listaFiltrada.reverse()
    }
    
    return (
      <div>
          <section>
              <input onChange={(this.inputMinimo)} placeholder="Valor Mínimo"/>
              <input onChange={this.inputMaximo} placeholder="Valor Máximo"/>
              <input onChange={this.inputNome} placeholder="Buscar Por Nome"/>

              <label>Ordernar por: </label>
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
          </section>

          <section>
            {listaFiltrada.map(carro => {
                return (
                    <div key={carro.id}>
                        <h3>Nome: {carro.name}</h3>
                        <p><b>Descrição:</b> {carro.description}</p>
                        <p><b>Preço:</b> R${carro.price}</p>
                        <p><b>Método de Pagamento:</b> {carro.paymentMethod}</p>
                        <p><b>Prazo de Entrega:</b> {carro.shipping} dias</p><hr/>
                    </div>
                )})}
          </section>
      </div>
    )
  }
}