import React from 'react'
import axios from 'axios'

export class PaginaComprador extends React.Component {

    state = {
        carros: []
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

  render() {

    return (
      <div>
        <section>
            {this.state.carros.map(carro => {
                return (
                    <div>
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