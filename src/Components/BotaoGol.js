import React from 'react';

export default class BotaoGol extends React.Component {

	hundleClick(event){
		event.preventDefault();
		this.props.marcarGol();
	}

    render() {
        return(
        	 <button onClick={this.hundleClick.bind(this)}>Gol</button>
        );
    }
}
