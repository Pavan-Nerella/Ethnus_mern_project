import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import {Link,Routes,Route} from "react-router-dom";
import BookingForm from "./BookingForm";

export default function Navigation(props) {
  return (

    <div>
      <Navbar
        expand="lg"
        bg={props.modeValue ? "dark" : "light"}
        data-bs-theme={props.modeValue ? "dark" : "light"}
      >
        <Container>
          <Navbar.Brand href="#home">Online health care</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link as={Link} to={'/BookingForm'}>Book oppointment</Nav.Link>
              <Nav.Link href="#link">Your reports</Nav.Link>
              <Nav.Link href="#">About us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link href="#link">Login</Nav.Link>
              <Nav.Link href="#link">Register</Nav.Link>
              <Form inline>
                <Button type="submit" onClick={props.updateMode}>
                  {props.modeValue ? "Light" : "Dark"}
                </Button>
              </Form>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
      <Routes>
        <Route path="/BookingForm" element={<BookingForm />}></Route>
      </Routes>  
      </div>
    </div>
  );
}
