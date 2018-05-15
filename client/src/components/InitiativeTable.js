import React, { Component } from 'react';

class InitiativeTable extends Component {

    /*
    getBody() {
    body = this.props.data.map(rowData) => {
    let row = [];
    for(let item of rowData) {
    row.push(<td>{item}</td>);
    }
    return <tr>{row}</tr>
    }
    return body;
    }
    */

    render() {
        let body = this.props.data.map((rowData) => {
            let row = [];
            for(let key in rowData) {
                if(rowData.hasOwnProperty(key) && key !== 'id') {
                    row.push(<td>{rowData[key]}</td>);
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
    }
    export default InitiativeTable;
