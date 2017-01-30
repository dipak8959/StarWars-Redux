import 'babel-polyfill';
import React, { PropTypes } from 'react';
import { Navbar, NavbarBrand, Nav } from 'reactstrap';

const App = (props) => {
  return (
    <div >
      <div>
        <Nav>
          <Navbar color="faded" light toggleable>
            <NavbarBrand href="/">Star Wars</NavbarBrand>
          </Navbar>
        </Nav>
      </div>
      <div>
        <hr className="my-1" />
      </div>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
