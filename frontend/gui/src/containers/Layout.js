import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap/';
import { Link } from 'react-router-dom';

const Layout = (props) => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" sticky="top">
          <Navbar.Brand><Link to="/">Should I Go To A Baseball Game?</Link></Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link><Link to="/">Teams</Link></Nav.Link>
              <Nav.Link href="#login">Login</Nav.Link>
              <Nav.Link href="#signup">Sign Up</Nav.Link>
            </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default Layout