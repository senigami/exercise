import React, { Component } from 'react';
import { fetchDefenseData } from './reportActions';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react';

const mapStateToProps = (state) => ({
  data: state.defenseReport.data,
});

const actions = {
  fetchDefenseData,
};

export class DefenseReport extends Component {
  componentDidMount() {
    if (this.props.data) {
      // we only need to get the data once
      return;
    }
    const { fetchDefenseData } = this.props;
    try {
      fetch('https://www.defense.gov/data.json')
        .then((response) => response.json())
        .then((data) => fetchDefenseData(data));
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { data } = this.props;
    const ListItem = (item) => (
      <Table.Row key={item.identifier}>
        <Table.Cell>{item.modified}</Table.Cell>
        <Table.Cell>{item.title}</Table.Cell>
        <Table.Cell>{item.description}</Table.Cell>
      </Table.Row>
    );
    const ListData = ({ items }) => {
      return (
        <Table compact singleLine>
          <Table.Body>{items.map((item) => ListItem(item))}</Table.Body>
        </Table>
      );
    };

    return (
      <div>
        <h1>Defense Data</h1>
        {data ? <ListData items={data} /> : <h1>loading...</h1>}
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(DefenseReport);
