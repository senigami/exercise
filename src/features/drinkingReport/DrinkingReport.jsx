import React, { Component } from 'react';
import { fetchDrinkingData, sortDrinkingData } from './drinkingActions';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  data: state.drinkingReport.data,
});

const actions = {
  fetchDrinkingData,
  sortDrinkingData,
};

export class DrinkingReport extends Component {
  componentDidMount() {
    if (this.props.data) {
      // we only need to get the data once
      return;
    }
    const { fetchDrinkingData } = this.props;
    try {
      fetch(
        'https://data.cdc.gov/api/views/bjsc-yd7n/rows.json?accessType=DOWNLOAD'
      )
        .then((response) => response.json())
        .then((data) => fetchDrinkingData(data));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data, column, direction, sortDrinkingData } = this.props;
    const ListItem = (item) => (
      <Table.Row key={item.key}>
        <Table.Cell>{item.state}</Table.Cell>
        <Table.Cell>{item['2012']}</Table.Cell>
        <Table.Cell>{item['2014']}</Table.Cell>
      </Table.Row>
    );
    const ListData = ({ items }) => {
      console.log('direction', direction);
      return (
        <Table sortable celled fixed>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell
                sorted={column === 'state' ? direction : true}
                onClick={() => sortDrinkingData('state')}
              >
                State
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === '2012' ? direction : null}
                onClick={() => sortDrinkingData('2012')}
              >
                2012
              </Table.HeaderCell>
              <Table.HeaderCell
                sorted={column === '2014' ? direction : null}
                onClick={() => sortDrinkingData('2014')}
              >
                2014
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>{items.map((item) => ListItem(item))}</Table.Body>
        </Table>
      );
    };

    return (
      <div>
        <h1>
          Percentage of Adults Who Report Driving After Drinking Too Much,
          Region 3 (sortable columns)
        </h1>
        {data ? <ListData items={data} /> : <h1>loading...</h1>}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(DrinkingReport);
