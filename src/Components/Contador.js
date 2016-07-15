import React from 'react';

export default class Contador extends React.Component{

	constructor() { //Toda que vez que formos manipular o React.Component temos que fazer um override nele.
		super(); // Recita de bolo. sempre terá que montar essa recita.
		this.state = {
			contador: 0,
		}
	}

	descrementar() {
		this.setState({ //Qnd queremos manipular o state envolvemos "({ ... })"
			contador: this.state.contador - 1,
		});
	}

	incrementar() {
		this.setState({ 
			contador: this.state.contador + 1,
		});
	}

	render() {
		return(
			<div>
				<h1>{this.state.contador}</h1>
				<div>
					<button onClick={this.descrementar.bind(this)}>-</button> {/* O bind é um método que chama o parametro, isso já existe no JS */} 
					<button onClick={this.incrementar.bind(this)}>+</button>
				</div>
			</div>
		);
	}
}