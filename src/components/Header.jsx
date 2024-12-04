import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';


function Header() {
  return (
    <>
   <Navbar bg="dark" expand="lg" data-bs-theme="dark">
  <Container>
   <div className='iconzz' >
      <i className=" icons fa-solid fa-utensils text-warning fw-bold fs-1"></i>
      <Navbar.Brand href="#home" className="mainHead text-warning fw-bold fs-2 " style={{fontFamily:'  font-family: "Satisfy", serif;"'}}>Restoran</Navbar.Brand>
  
   </div>
    {/* Add Navbar Toggle for responsive view */}
    <Navbar.Toggle aria-controls="navbarScrollingDropdown" />

    <Navbar.Collapse id="navbarScrollingDropdown">
      <Nav className="me-auto" style={{ marginLeft: '450px' }}>
        <Nav.Link href="#home" className=" text-white fw-bold fs-5 p-2">Home</Nav.Link>
        <Nav.Link href="#features" className="text-white fw-bold fs-5 p-2">About</Nav.Link>
        <Nav.Link href="#pricing" className="text-white fw-bold fs-5 p-2">Service</Nav.Link>
        <Nav.Link href="#pricing" className="text-white fw-bold fs-5 p-2">Menu</Nav.Link>
        
        <NavDropdown title="Pages" id="navbarScrollingDropdown" className="dropdown-title text-white fw-bold fs-5 p-0">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
        
        <Nav.Link href="#pricing" className="text-white fw-bold fs-5 p-2">Contact</Nav.Link>
        <Button variant="outline-warning" className=" text-white bg-warning p-1 fw-bold ms-3" style={{ height: '40px',width:'150px' }}>Book A Table</Button>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default Header