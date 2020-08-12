import React, { Component } from 'react';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import { Report1 } from '../../features/report1/Report1';

class App extends Component {
  render() {
    return (
      <Route
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch key={this.props.location.key}>
                <Route exact path='/report1' component={Report1} />
                <Route path='/report2' component={Report1} />
                <Route exact path='/' component={HomePage} />
              </Switch>
            </Container>
          </>
        )}
      />
    );
  }
}

export default withRouter(App);
