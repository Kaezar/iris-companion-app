import React, { Component } from 'react';
import SimpleTable from 'react-simple-table';

class InitiativeTable extends Component {
    render() {
        <SimpleTable columns={['Rank', 'Name', 'Score']}, data={ this.props.data } />
    }
}
export default InitiativeTable;
