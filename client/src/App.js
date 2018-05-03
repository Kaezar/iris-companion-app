import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import DiceRoll from './DiceRoll.js';

class App extends Component {
    /*
    state = {
        response: ''
    };

    componentDidMount() {
        this.callApi()
        .then(res => this.setState({ response: res.express }))
        .catch(err => console.log(err));
    }

    callApi = async () => {
        const response = await fetch('/api/hello');
        const body = await response.json();

        if (response.status !== 200) throw Error(body.message);

        return body;
    };
    */

    render() {
        return (
            <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
            </header>
            <RollForm/>
            </div>
        );
    }
}

class RollForm extends Component {
    constructor() {
        super();
        this.state = {
            count: '',
            sides: '',
            mod: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name] : event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        let diceRoll = new DiceRoll(this.state.count, this.state.sides, this.state.mod);
        const rollResult = diceRoll.roll();
        alert(`Result: ${rollResult}`);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Roll </label>
                    <input type="number" name="count" onChange={this.handleChange} min="1" max="infinity" required />
                <label>d</label>
                    <input type="number" name="sides" onChange={this.handleChange} min="1" max="infinity" required />
                <label>+</label>
                    <input type="number" name="mod" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default App;
