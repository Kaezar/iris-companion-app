import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import DiceRoll from '../DiceRoll.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: '',
            sides: '',
            mod: '',
            tableData: [
                { rank: 1, name: "Satoshi", score: 21},
                { rank: 2, name: "Elise", score: 17}
            ]
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRoll = this.handleRoll.bind(this);
        this.sortInitiative = this.sortInitiative.bind(this);
        this.handleInsertRow = this.handleInsertRow.bind(this);
        this.handleDeleteRow = this.handleDeleteRow.bind(this);
        this.handleInit = this.handleInit.bind(this);
        this.sortRank = this.sortRank.bind(this);
    }

    handleInsertRow(row) {
        console.log("handling insert row");

        let newRow = {};
        newRow.rank = 0;
        newRow.name = row.name;
        newRow.score = Number(row.score);

        this.setState({
            tableData: [...this.state.tableData, newRow],
        }, () => this.sortInitiative());
    }

    handleDeleteRow(rowKeys) {

    }

    sortInitiative() {
        console.log("sorting initiative");
        this.setState((prevState) => {
            console.log("printing previous state:");
            console.log(prevState.tableData);
            return {
                tableData: prevState.tableData
                .sort((a, b) => parseInt(b.score) - parseInt(a.score))
            }
        }, () => this.sortRank());
    }

    sortRank() {
        this.setState((prevState) => {
            console.log('sortRank prevState:');
            console.log(prevState);

            let newTableData = prevState.tableData.map((item, index) => {
                let newRow = {};
                newRow.rank = index+1;
                newRow.name = item.name;
                newRow.score = item.score;
                return newRow;
            })
            console.log("newTableData:");
            console.log(newTableData);

            return {
                tableData: newTableData
            }
        })
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

    handleInit() {
        let diceRoll = new DiceRoll(this.state.count, this.state.sides, this.state.mod);
        const rollResult = diceRoll.roll();
        this.handleInsertRow({ name: 'player', score: rollResult });
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
                    onInitClick={this.handleInit}
                    />
                <div>
                    <p className="Table-header">Initiative Table</p>
                </div>
                <InitiativeTable data={this.state.tableData} />
            </div>
        );
    }
}
/*
class RollForm extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRollClick = this.handleRollClick.bind(this);
        this.handleInitClick = this.handleInitClick.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target);
    }

    handleRollClick() {
        this.props.onRollClick();
    }

    handleInitClick() {
        this.props.onInitClick();
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
                    <input type="button" onClick={this.handleInitClick} value="Roll initiative!" />
                </form>
            </div>
        );
    }
}
*/

const RollForm = ({onChange, onRollClick, onInitClick}) => {

    const handleChange = event => { onChange(event.target) };

    return(
        <div>
            <form>
                <label>Roll </label>
                <input type="number" name="count" onChange={handleChange} min="1" max="infinity" required />
                <label>d</label>
                <input type="number" name="sides" onChange={handleChange} min="1" max="infinity" required />
                <label>+</label>
                <input type="number" name="mod" onChange={handleChange} />
                <input type="button" onClick={onRollClick} value="Roll!" />
                <input type="button" onClick={onInitClick} value="Roll initiative!" />
            </form>
        </div>
    );
}

const InitiativeTable = ({data}) => {

    let body = data.map((rowData) => {
        let row = [];
        for(let key in rowData) {
            if(rowData.hasOwnProperty(key)) {
                row.push(<td>{rowData[key]}</td>);
            }
        }
        return <tr>{row}</tr>
    });

    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {body}
                </tbody>
            </table>
        </div>
    );
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
