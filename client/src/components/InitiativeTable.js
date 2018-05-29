import React from 'react';

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
export default InitiativeTable;
