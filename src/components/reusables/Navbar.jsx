import React from 'react';
import styled from 'styled-components';

import Container from './Container.jsx';
import Item from './Item.jsx';

const NavStyle = styled.nav`
  width: 100%;
  height: 80px;
  background-color: black;
  color: white;
  padding: 2rem;
  position: fixed;
  top: 0;
  box-sizing: border-box;
`;

const MenuContainer = styled.div`
  position: relative;
`;

const Menu = styled.div`
  display: ${props => (
    props.display ? 'block' : 'none'
  )};
  width: 100px;
  height: 100px;
  background-color: orange;
  color: black;
  padding: 1rem;
  box-sizing: border-box;
  position: absolute;
  left: 100px;
  top: 48px;
  transition: 1s;
`;

const Button = styled.button`
  background-color: white;
  color: black;
  padding: 1rem 2rem;
`;

class NavBar extends React.Component {
  state = {
    open: false
  }

  toggleModal = () => {
    
    this.setState(prevState => ({
      open: !prevState.open,
    }));
  }
  
  render() {
    console.log(this.state);

    return (
      <NavStyle>
        <Container>
          <Item flex={1}>
            Hello world!
          </Item>
          <Item flex={1}>
            <Button onClick={this.toggleModal}>
              Open Menu
            </Button>
          </Item>
          <Item flex={1}>
            <Button onClick={this.toggleModal}>
              Open Menu
            </Button>
          </Item>
          <Item flex={1}>
            <Button onClick={this.toggleModal}>
              Open Menu
            </Button>
          </Item>
          <Menu display={this.state.open}>
            Blablabala
          </Menu>
        </Container>
      </NavStyle>
    )
  }
}

export default NavBar;