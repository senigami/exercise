import React, { Component } from 'react';

export class Report1 extends Component {
  state = {
    data: null,
  };

  async componentDidMount() {
    fetch('https://www.defense.gov/data.json')
      .then((response) => response.json())
      .then((data) => this.setState({ data: data }));
  }

  render() {
    const ListData = () => {
      console.log(this.state.data);
      return null;
    };

    return (
      <div>
        <h1>Report 1</h1>
        {this.state.data ? <ListData /> : <h1>loading...</h1>}
      </div>
    );
  }
}

export default Report1;
