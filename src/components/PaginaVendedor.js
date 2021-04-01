import React from 'react'
import axios from 'axios'

export class PaginaVendedor extends React.Component {
  
  state = {
    name : "",
    description : "",
    price : "",
    paymentMethod : "",
    shipping : "",
    link : "",

  }

  inputCarro = (event) => {
    this.setState({name : event.target.value})
  }

  inputDescricao = (event) => {
    this.setState({description : event.target.value})
  }

  inputPreco = (event) => {
    this.setState({price : event.target.value})
  }
  
  inputMeioDePagamento = (event) => {
    this.setState({paymentMethod : event.target.value})
  }

  inputPrazo = (event) => {
    this.setState({shipping : event.target.value})
  }

  inputLink = (event) => {
    this.setState({link : event.target.value})
  }


  criarProduto = async () => {
    if (this.state.name === "" || this.state.description === "" || this.state.price === "" || this.state.paymentMethod === "" || this.state.shipping === "" || this.state.link === ""){
        alert("Todos os campos devem ser preenchidos")
        return
      }
    
    const body = {
      name : this.state.name,
      description : this.state.description,
      price : this.state.price,
      paymentMethod : this.state.paymentMethod,
      shipping : this.state.shipping,
      link : this.state.link
    }

    try {
      await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/futureCarThree/cars ", body)
      this.setState({name : "", description : "", price : "" , paymentMethod : "" , shipping: "" , link: ""})
      alert("Oferta criada com sucesso")
    }
    catch (error) {
      console.log(error)
    }
  }


  render() {
    
    return (
      <div>
        <input placeholder="Carro" value={this.state.name} onChange={this.inputCarro}/>
        <input placeholder="Descrição" value={this.state.description} onChange={this.inputDescricao}/>
        <input placeholder="Preço"value={this.state.price} onChange={this.inputPreco}/>
        <input placeholder="Meio de Pagamento" value={this.state.paymentMethod} onChange={this.inputMeioDePagamento}/>
        <input placeholder="Prazo de Entrega" value={this.state.shipping} onChange={this.inputPrazo}/>
        <input placeholder="Link" value={this.state.link} onChange={this.inputLink}/>
        <button onClick={this.criarProduto}>Criar</button>
      </div>
    )
  }
}
