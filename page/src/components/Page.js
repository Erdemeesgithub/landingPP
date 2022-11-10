import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button, Stack } from "react-bootstrap";
import styles from "../styles/components/Page.module.css";
import image from "../assets/Ellipse.png";
import Rectangle from "../assets/Rectangle.png";
import { useContext } from "react";
import { ColorModeContext } from "../Context";

export const Page = () => {
  const color = useContext(ColorModeContext);
  const array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  return (
    <div className={styles.Container1}>
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
    </div>
  );
};
