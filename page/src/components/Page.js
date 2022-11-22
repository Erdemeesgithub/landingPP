import styles from "../styles/components/Page.module.css";
import image from "../assets/Ellipse.png";
import { useContext } from "react";
import { useState, useEffect } from "react";
import { Card, Spinner } from "react-bootstrap";
import axios from "axios";
import { ThemeContext } from "./ThemeProvider";

const baseUrl = "https://dummyapi.io/data/v1/";

export const Page = () => {
  const { isDark } = useContext(ThemeContext);
  // const array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(baseUrl + "user?limit=9", {
        headers: {
          "app-id": "636f2f24e8d0ffd9c83fc52f",
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      className={styles.Container1}
      style={{
        background: isDark ? "#000" : "#fff",
      }}
    >
      <div className={styles.All}>
        <div className={styles.Texts}>
          <h1 style={{ color: isDark ? "#fff" : "#000" }}>Blog Posts</h1>
          <p
            className={styles.Textss}
            style={{ color: isDark ? "#fff" : "#000" }}
          >
            Our latest updates and blogs about managing your team
          </p>
          {!data && (
            <div className={styles.spinner}>
              <Spinner animation="border" role="status"></Spinner>
            </div>
          )}
          <div className={styles.AllCard}>
            {data && data.data.map((item) => <Item {...item}></Item>)}
          </div>
        </div>
      </div>
      <div className={styles.button1}>
        <button className={styles.btn}>Next </button>
      </div>
    </div>
  );
};

const Item = (props) => {
  return (
    <Card style={{ width: "300px" }}>
      <Card.Img variant="top" src={props.picture} className={styles.picture} />
      <Card.Body>
        <Card.Title>10 secret tips for managing a team remotely</Card.Title>
        <Card.Text>
          Our latest updates and blogs about managing your team Our latest
          updates and blogs about managing your team.
        </Card.Text>
        <div className={styles.user}>
          <img src={image}></img>
          <p className={styles.firstname}>{props.firstName} | 2022 Jan</p>
        </div>
      </Card.Body>
    </Card>
  );
};
