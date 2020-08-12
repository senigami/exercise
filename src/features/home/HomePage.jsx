import React from 'react';
import { Segment, Container, Header, Button, Icon } from 'semantic-ui-react';

const HomePage = ({ history }) => {
  return (
    <Segment textAlign='center' vertical className='masthead'>
      <Container text>
        <Header as='h1'>Exercise</Header>
        <p>
          I realize the names on this are pretty generic but at this point I
          haven't even decided which reports to use
        </p>
        <Button onClick={() => history.push('/report1')} size='huge'>
          View Report 1
          <Icon name='right arrow' />
        </Button>
        <Button onClick={() => history.push('/report2')} size='huge'>
          View Report 2
          <Icon name='right arrow' />
        </Button>
      </Container>
    </Segment>
  );
};

export default HomePage;
