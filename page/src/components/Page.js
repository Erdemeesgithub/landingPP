import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button} from 'react-bootstrap'

export const Page = () => {
  return (
    <div>
    <Navbar>
        <Container>
            <Navbar.Brand href="#home">Team.</Navbar.Brand>
            <Nav.Link href="#producs">Products</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
            <Button variant="outline-primary">Get access</Button>
            
            

        </Container>
    </Navbar>
    <hr></hr>
    </div>
  )
};
