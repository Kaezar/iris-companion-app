import React, { Component } from 'react';
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import '../../node_modules/react-bootstrap-table/css/react-bootstrap-table.css'

class InitiativeTable extends Component {
    render() {
        const selectRowProps = {
            mode: 'checkbox',
            clickToSelect: true
        };
        const options = {
            afterInsertRow: this.props.onInsertRow,
            afterDeleteRow: this.props.onDeleteRow
        };
        return (
            <div>
                <BootstrapTable
                    data={this.props.data}
                    selectRow={selectRowProps}
                    options={options}
                    insertRow={true}
                    deleteRow={true}
                    >
                    <TableHeaderColumn isKey = {true} dataField="rank">
                        Rank
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='name'>
                        Name
                    </TableHeaderColumn>
                    <TableHeaderColumn dataField='score'>
                        Score
                    </TableHeaderColumn>
                </BootstrapTable>
            </div>
        );
    }
}

export default InitiativeTable;
