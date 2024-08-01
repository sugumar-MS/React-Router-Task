import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Approutes from "./utils/Approutes";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import './App.css'; // Import the CSS file

function App() {
  const router = createBrowserRouter(Approutes);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          {/* <Navbar.Brand href='#'>GUVI</Navbar.Brand> */}
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
              <Nav.Link className="nav-item" href="/">ALL</Nav.Link>
              <Nav.Link className="nav-item" href="/FullStackDevelopment">FULL STACK DEVELOPMENT</Nav.Link>
              <Nav.Link className="nav-item" href="/DataScience">DATA SCIENCE</Nav.Link>
              <Nav.Link className="nav-item" href="/CyberSecurity">CYBER SECURITY</Nav.Link>
              <Nav.Link className="nav-item" href="/Career">CAREER</Nav.Link>
            </Nav><br></br>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;

