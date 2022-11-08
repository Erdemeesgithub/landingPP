import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Stack } from "react-bootstrap";
import styles from "../styles/components/Page.module.css";
import image from "../assets/Ellipse.png";
import Rectangle from "../assets/Rectangle.png";
import { BsSquareFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useContext } from "react";
import { ColorModeContext } from "../Context";

export const Page = () => {
  const color = useContext(ColorModeContext)
  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className={styles.Container1}>
      <Navbar className={styles.color}>
        <Container>
          <div>
            <h2 href="#home" className={styles.Brand}>
              Team.
            </h2>
          </div>
          <Stack direction="horizontal" gap={5}>
            <Nav.Link href="#producs">Products</Nav.Link>
            <Nav.Link href="#services">Services</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#login">Log in</Nav.Link>
            <Button variant="outline-primary">Get access</Button>
          </Stack>
        </Container>
      </Navbar>
      <hr className={styles.color}></hr>
      <div className={styles.All}>
        <div className={styles.Texts}>
          <h1>Blog Posts</h1>
          <p className={styles.Textss}>
            Our latest updates and blogs about managing your team
          </p>
          <div className={styles.card9}>
            {array.map(() => {
              return (
                <div className={styles.display}>
                  <img src={Rectangle} className={styles.img1}></img>
                  <div className={styles.container}>
                    <h2>Data-Driven Design is Killing Our Instincts</h2>
                    <p>
                      Our latest updates and blogs about managing your team Our
                      latest updates and blogs about managing your team
                    </p>
                    <div className={styles.information}>
                      <img src={image}></img>
                      <p>Jane Cooper | 2nd January,2022</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <button className={styles.btn}>Next </button>
      </div>
      <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.team}>
            <h1>team</h1>
            <div className={styles.square}>
              <BsSquareFill></BsSquareFill>
            </div>
          </div>
          <div className={styles.Instagram}>
            <AiFillInstagram  style={{ width: 30, height: 30 }}></AiFillInstagram>
            <h4>Instagram</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillFacebook  style={{ width: 30, height: 30 }}></AiFillFacebook>
            <h4>Facebook</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillTwitterCircle  style={{ width: 30, height: 30 }}></AiFillTwitterCircle>
            <h4>Twitter</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillInstagram  style={{ width: 30, height: 30 }}></AiFillInstagram>
            <h4>Instagram</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillFacebook  style={{ width: 30, height: 30 }}></AiFillFacebook>
            <h4>Facebook</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillTwitterCircle
              style={{ width: 30, height: 30 }}
            ></AiFillTwitterCircle>
            <h4>Twitter</h4>
          </div>
          <div></div>
        </div>
        <div className={styles.footer2}>
          <div className={styles.footer2title}>
            <h4>Use Cases</h4>
          </div>
          <div className={styles.footer2text}>
            <h4>UI Design</h4>
            <h4>UX Design</h4>
            <h4>Prototyping</h4>
            <h4>UI Design</h4>
            <h4>UX Design</h4>
            <h4>Prototyping</h4>
          </div>
        </div>
        <div className={styles.footer3}></div>
        <div className={styles.footer4}></div>
        <div className={styles.footer5}></div>
      </div>
    </div>
  );
};
