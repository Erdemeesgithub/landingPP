// import styles from "../styles/components/Landing.module.css";
// import { Button } from "react-bootstrap";
// import { Spinner } from "react-bootstrap";
// import React, { useState } from 'react';
// import {Modal} from 'react-bootstrap';
// import {Accordion} from 'react-bootstrap';
// import {Container} from 'react-bootstrap';
// import {Row} from 'react-bootstrap';
// import {Col} from 'react-bootstrap';

// export const Landing = () => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//   return (
//     <div className={styles.Container}>

//     <Button variant="warning">hello</Button>{' '}
//     <Spinner animation="border" role="status">
//       <span className="visually-hidden">Loading...</span>
//     </Spinner>
//     <Button variant="danger" onClick={handleShow}>
//         press me
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Hellooo</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>hello hi</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//           <Button variant="danger" onClick={handleClose}>
//             close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       <Accordion>
//       <Accordion.Item eventKey="0">
//         <Accordion.Header>press this</Accordion.Header>
//         <Accordion.Body>
//       do ur homework 
//         </Accordion.Body>
//       </Accordion.Item>
//       </Accordion>
//       <Container>
//         <Row className="border">
//             <Col xs={6} className="border" style={{backgroundColor:'pink'}}>hello</Col>
//             <Col xs={6} className="border" style={{backgroundColor:'brown'}}>hello</Col>
//         </Row>
//         <Row className="border">
//             <Col xs={6} className="border" style={{backgroundColor:'pink'}} >hello</Col>
//             <Col xs={6} className="border" style={{backgroundColor:'brown'}}>hello</Col>
//         </Row>
//         <Row className="border">
//             <Col xs={6} className="border" style={{backgroundColor:'pink'}} >hello</Col>
//             <Col xs={6} className="border" style={{backgroundColor:'brown'}}>hello</Col>
//         </Row>
//       </Container>

//     </div>
//   );
// };
