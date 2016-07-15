import React from 'react';

import PlacarContainer from './PlacarContainer';

const dados = { //declaração de variável do ES6. Você pode declarar com "const" ou "let"
	partida: {
		estadio: 'Maracanã/RJ',
		data: '15/07/2016',
		horario: '19h'
	},
	casa: {
		nome: 'Vasco'
	},
	visitante: {
		nome: 'Flamengo'
	}
}

export default class App extends React.Component{ // exporta a class para ser utilizdo como component
	render() { // permite vc escrever o que vai ser renderizado.
		// OBS sempre que o JSX for mais de uma linha tem que ser envolvido por parentese
		return <PlacarContainer {...dados} />; //ES6 - Repassa as propriedades dados dentro Plcarcontainer
	}
}