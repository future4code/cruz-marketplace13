import React from 'react'
import { PaginaComprador } from './components/PaginaComprador'
import { PaginaVendedor} from './components/PaginaVendedor'
import { PaginaInicial } from './components/PaginaInicial'
import Header from './components/header'
import Footer from './components/footer'

export default class App extends React.Component {

	state = {
		pagina: 'inicial'
	}

	mudarPagina = (novaPagina) => {
		this.setState({pagina: novaPagina})
	}

	renderizarPagina = () => {
		if (this.state.pagina === 'inicial') {
			return <PaginaInicial mudarPagina={this.mudarPagina}/>
		}
		else if (this.state.pagina === 'vendedor') {
			return <PaginaVendedor/>
		}
		else if (this.state.pagina === 'comprador') {
			return <PaginaComprador/>
		}
	}

	render() {
		return (
			<App>
				<Header />
				{this.renderizarPagina()}
				<Footer />
			</App>
		)
	}
}
