import React, { Component } from 'react';
import NavBar from '../../features/nav/NavBar';
import { Container } from 'semantic-ui-react';
import { Route, Switch, withRouter } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import DefenseReport from '../../features/defenseReport/DefenseReport';
import DrinkingReport from '../../features/drinkingReport/DrinkingReport';

class App extends Component {
  render() {
    return (
      <Route
        render={() => (
          <>
            <NavBar />
            <Container className='main'>
              <Switch key={this.props.location.key}>
                <Route exact path='/defenseReport' component={DefenseReport} />
                <Route path='/drinkingReport' component={DrinkingReport} />
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
