import React, { Component } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class NavBar extends Component {
  render() {
    return (
      <Menu fixed='top'>
        <Container>
          <Menu.Item as={NavLink} exact to='/' header>
            <img
              src='https://secondfront.com/wp-content/uploads/2019/07/cropped-sf-logo.png'
              alt='logo'
              style={{ width: 'auto', height: '2em' }}
            />
          </Menu.Item>
          <Menu.Item
            as={NavLink}
            exact
            to='/defenseReport'
            name='Defense Report'
          />
          <Menu.Item as={NavLink} to='/Report2' name='Report2' />
        </Container>
      </Menu>
    );
  }
}
export default withRouter(connect(null)(NavBar));
