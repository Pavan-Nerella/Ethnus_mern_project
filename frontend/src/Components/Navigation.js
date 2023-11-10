import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link} from "react-router-dom";


export default function Navigation(props) {
  return (
    <div>
      <Navbar
        expand="lg"
        bg={props.modeValue ? "dark" : "light"}
        data-bs-theme={props.modeValue ? "dark" : "light"}
        sticky="top"
      >
          <Navbar.Brand as={Link} to={'/'} >Online health care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to= {'/Booking'} >Book oppointment</Nav.Link>
              <Nav.Link as={Link} to={'/Report'}>Your reports</Nav.Link>
              <Nav.Link as={Link} to={'/About'}>About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to={'/plogin'}>Login</Nav.Link>
              <Nav.Link href="#link">Register</Nav.Link>
              <Form inline>
                <Button type="submit" onClick={props.updateMode}>
                  {props.modeValue ? "Light" : "Dark"}
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
