import React from 'react';

import Time from './Time';
import Partida from './Partida';

export default class PlacarContainer extends React.Component{ // exporta a class para ser utilizdo como component
	
	constructor(){
		super();
		this.state = {
			golCasa:0,
			golVisitante:0,
		};
	}

	marcargolCasa(){
		this.setState({
			golCasa: this.state.golCasa + 1,
		});	
	}

	marcargolVisitante(){
		this.setState({
			golVisitante: this.state.golVisitante + 1,
		});
	}


	render() { // permite vc escrever o que vai ser renderizado.
		// OBS sempre que o JSX for mais de uma linha tem que ser envolvido por parentese
		
		// Recurso de "extração de dados", com isso ele varre td que tem dentro de cada propriedade.
		const {partida, casa, visitante} = this.props; 

		// Declarando uma constante para os estilos.
		const estilo = {float:"left",marginRight:"10px"};

		return (
			<div>
				<div style={estilo}>
					<h3>Casa</h3>
					<Time nome={casa.nome} 
						  gols={this.state.golCasa}
						  marcarGol={this.marcargolCasa.bind(this)}/>
				</div>

				<div style={estilo}>
					<Partida {...partida}/>
				</div>

				<div style={estilo}>
					<h3>Visitante</h3>
					<Time nome={visitante.nome}
						  gols={this.state.golVisitante}
						  marcarGol={this.marcargolVisitante.bind(this)}/>
				</div>
			</div>
		);
	}
}
