import React, {Component} from 'react';
import './App.css';
import {ImcCalculator} from './components/imc-calculator';

export class App extends Component {

	constructor() {
		super();
		this.state = {
			height: 1,
			weight: 0,
			imc: 28,
		};
	}
	async changeWeight(event) {
		const weight = +event.target.value
		const newState = {...this.state, weight}
		console.log(this.state)
		console.log(newState)
		await this.setState(newState) ;
		console.log(this.state)
		await this.changeImc();
		console.log(this.state)
	}
	async changeHeight(event) {
		const height = +event.target.value
		await this.setState({...this.state, height}) ;
		await this.changeImc();
	}
	async changeImc() {
		const imc = this.state.weight / (this.state.height ** 2);
		await this.setState({...this.state, imc}) ;
	}

	render() {
		return (
            <div>
		      <h1>Calcule seu IMC</h1>
		      <ImcCalculator
				imc={this.state.imc}
				onChangeWeight={(evt) => this.changeWeight(evt)}
				onChangeHeight={(evt) => this.changeHeight(evt)}
				></ImcCalculator>
		    </div>
		);
	}
}

export default App;
