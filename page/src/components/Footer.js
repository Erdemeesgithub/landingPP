import styles from "../styles/components/Footer.module.css"
import { BsSquareFill } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { useContext } from "react";
import { ColorModeContext } from "../Context";

export const Footer = () => {
    const color = useContext(ColorModeContext);
    return (
        <div className={styles.footer}>
        <div className={styles.footer1}>
          <div className={styles.team}>
            <h1>team</h1>
            <div className={styles.square}>
              <BsSquareFill></BsSquareFill>
            </div>
          </div>
          <div className={styles.Instagram}>
            <AiFillInstagram
              style={{ width: 30, height: 30 }}
            ></AiFillInstagram>
            <h4>Instagram</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillFacebook style={{ width: 30, height: 30 }}></AiFillFacebook>
            <h4>Facebook</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillTwitterCircle
              style={{ width: 30, height: 30 }}
            ></AiFillTwitterCircle>
            <h4>Twitter</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillInstagram
              style={{ width: 30, height: 30 }}
            ></AiFillInstagram>
            <h4>Instagram</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillFacebook style={{ width: 30, height: 30 }}></AiFillFacebook>
            <h4>Facebook</h4>
          </div>
          <div className={styles.Instagram}>
            <AiFillTwitterCircle
              style={{ width: 30, height: 30 }}
            ></AiFillTwitterCircle>
            <h4>Twitter</h4>
          </div>
        </div>
        <div className={styles.footer2}>
          <div className={styles.footer2title}>
            <h3>Use Cases</h3>
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
        <div className={styles.footer3}>
          <div className={styles.footer3title}>
            <h3>Explore</h3>
          </div>
          <div className={styles.footer3text}>
            <h4>Figma</h4>
            <h4>Customers</h4>
            <h4>Why I Love Figma</h4>
            <h4>Figma</h4>
            <h4>Customers</h4>
            <h4>Why I Love Figma</h4>
          </div>
        </div>
        <div className={styles.footer4}>
          <div className={styles.footer3title}>
            <h3>Recources</h3>
          </div>
          <div className={styles.footer3text}>
            <h4>Community Recources Hub</h4>
            <h4>Support</h4>
            <h4>Education</h4>
            <h4>Community Recources Hub</h4>
            <h4>Support</h4>
            <h4>Education</h4>
          </div>
        </div>
        <div className={styles.footer5}>
          <h3 className={styles.footer3title}>Subscribe to our newsletter</h3>
          <input className={styles.input} placeholder="Email"></input>
        </div>
      </div>
    )
}