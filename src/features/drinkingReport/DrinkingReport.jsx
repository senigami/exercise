import React, { Component } from 'react';
import { fetchDrinkingData } from './drinkingActions';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  data: state.drinkingReport.data,
});

const actions = {
  fetchDrinkingData,
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
    const { data } = this.props;
    console.log(data);
    const ListItem = (item) => (
      <Table.Row key={item[0]}>
        <Table.Cell>{item[8]}</Table.Cell>
        <Table.Cell>{item[9]}</Table.Cell>
        <Table.Cell>{item[10]}</Table.Cell>
      </Table.Row>
    );
    const ListData = ({ items }) => {
      return (
        <Table compact singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>State</Table.HeaderCell>
              <Table.HeaderCell>2012</Table.HeaderCell>
              <Table.HeaderCell>2014</Table.HeaderCell>
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
          Region 3
        </h1>
        {data ? <ListData items={data} /> : <h1>loading...</h1>}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(DrinkingReport);
