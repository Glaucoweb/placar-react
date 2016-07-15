import React from 'react'; //chama a lib do react
import ReactDOM from 'react-dom' ; // chama lib para a interpretação do DOM

import App from './components/App'; // imporntado o componente e podemos omitir a extensão do JS
/* OBS: Toda vez que se utiliza um import para chamar um componente vc precisa inserir a chamanda 
"export default" no componente.
*/
ReactDOM.render( // Ultilizamos qnd formos renderizar o componente no DOM
	<App/>, // Chamando o componente. Por padrão começamos com a letra maiúscula os nomes dos componentes
	document.getElementById("app") // chamando o ID que está na página HTML
);
