import React, { Component } from 'react';
import InitiativeTable from './components/InitiativeTable.js';
import logo from './logo.svg';
import './App.css';
import DiceRoll from './DiceRoll.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: '',
            sides: '',
            mod: '',
            tableData: [
                { rank: 1, name: "Satoshi", score: 21 },
                { rank: 2, name: "Elise", score: 17 }
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.sortInitiative = this.sortInitiative.bind(this);
        this.handleInsertRow = this.handleInsertRow.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
    }

    handleInsertRow(row) {
        console.log("handling insert row");
        console.log(row);

        let newRow = {};
        newRow.rank = Number(row.rank);
        newRow.name = row.name;
        newRow.score = Number(row.score);

        this.setState({
            tableData: [...this.state.tableData, newRow]
        }, console.log(this.state.tableData));
        /*
        this.setState(prevState => ({
            tableData: [...prevState.tableData, row]
        }), this.sortInitiative());
        */
    }

    handleDeleteRow(rowKeys) {
        /*
        let data = this.state.tableData;
        let init;
        rowKeys.forEach((key) => {
            init = data.map((item) => {
                if (item.rank === key) data.splice(data.indexOf(item), 1);
            });
        });

        this.setState({ tableData: init });

        /*
        rowKeys.forEach((key) => {
        data.map((item) => {
        if (item.rank === key) {
        data.splice(data.indexOf(item), 1);
        }
        });
        })
        data.map((item) => {
        if (item.rank === element)
        })
        */
        alert('You deleted: ' + rowKeys);
    }

    sortInitiative() {
        console.log("sorting initiative");
        this.setState((prevState) => {
            console.log("printing previous state:");
            console.log(prevState.tableData);
            return {
                tableData: prevState.tableData
                .sort((a, b) => parseInt(b.score) - parseInt(a.score))
                //.map((item) => item.rank = prevState.tableData.indexOf(item) + 1)
            }
        }, console.log(this.state.tableData));
    }

    handleChange(target) {
        console.log("calling handleChange");
        this.setState({ [target.name] : target.value });
    }

    handleRoll() {
        let diceRoll = new DiceRoll(this.state.count, this.state.sides, this.state.mod);
        const rollResult = diceRoll.roll();
        alert(`Result: ${rollResult}`);
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <RollForm
                    onChange={this.handleChange}
                    onRollClick={this.handleRoll}
                    />
                <div>
                    <p className="Table-header">Initiative Table</p>
                </div>
                <InitiativeTable
                    data={this.state.tableData}
                    onInsertRow={this.handleInsertRow}
                    onDeleteRow={this.handleDeleteRow}
                    />
            </div>
        );
    }
}

class RollForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRollClick = this.handleRollClick.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target);
    }

    handleRollClick() {
        this.props.onRollClick();
    }

    render() {
        return(
            <div>
                <form>
                    <label>Roll </label>
                    <input type="number" name="count" onChange={this.handleChange} min="1" max="infinity" required />
                    <label>d</label>
                    <input type="number" name="sides" onChange={this.handleChange} min="1" max="infinity" required />
                    <label>+</label>
                    <input type="number" name="mod" onChange={this.handleChange} />
                    <input type="button" onClick={this.handleRollClick} value="Roll!" />
                </form>
            </div>
        );
    }
}

export default App;

/*
function sortAndRank(data) {
    data.sort((a, b) => parseInt(b.score) - parseInt(a.score));
    return data.map((item) => item.rank = data.indexOf(item) + 1);
}

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
