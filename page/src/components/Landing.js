import styles from "../styles/components/Landing.module.css";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import meet from "../assets/meet.png";
import icon from "../assets/icon.png";
import event from "../assets/event.png";
import group from "../assets/Group.png";
import { useEffect } from "react";
import axios from "axios";
import event2 from "../assets/event2.png";
import event3 from "../assets/event.png";
import MaskGroup from "../assets/MaskGroup.png";
import Group18 from "../assets/Group18.png";
import MaskGroup2 from "../assets/MaskGroup2.png";
import { FaStar } from "react-icons/fa";
import Any from "../assets/Ellipse.png";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { ThemeContext } from "./ThemeProvider";

const BaseUrl = "https://dummyapi.io/data/v1/";

export const Landing = () => {
  const { isDark } = useContext(ThemeContext);
  const [pos, setPos] = useState(0);
  const goRight = () => setPos((prev) => prev + 1);
  const goLeft = () => setPos((prev) => prev - 1);

  if (pos === 7) {
    setPos(pos - 1)
  }
  if (pos === -1) {
    setPos(pos + 1)
  }

  useEffect(() => {
    axios
      .get(BaseUrl + "user", {
        headers: {
          "app-id": "636f2fc0e8d0ffd60f3fc549",
        },
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div
      className={styles.Container}
      style={{
        background: isDark ? "#000" : "#fff",
        color: isDark ? "#fff" : "#000",
      }}
    >
      <div className={styles.header}>
        <div className={styles.header1}>
          <div>
            <p className={styles.headerTitle}>
              Instant collaborations for remote teams
            </p>
            <h4 className={styles.headerText}>
              All in one for your remote team chats, collaboration and track
              projects
            </h4>
          </div>
          <div className={styles.headerButton}>
            <input placeholder="Email" className={styles.input1}></input>
            <button className={styles.button1}>Get early access</button>
          </div>
        </div>
      </div>
      <Container>
        <div className={styles.postPage1}>
          <div className={styles.postPage1div}>
            <p className={styles.text2}>Your Hub for teamwork</p>
            <p className={styles.text3}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <Link>Learn more</Link>
          </div>
          <div>
            <img className={styles.meet} src={meet}></img>
            <img className={styles.icon} src={icon}></img>
            <img className={styles.event} src={event}></img>
            <img className={styles.group} src={group}></img>
          </div>
        </div>
        <div className={styles.postPage2}>
          <div>
            <img className={styles.Maskgroup} src={MaskGroup}></img>
            <img className={styles.event2} src={event2}></img>
            <img className={styles.event3} src={event3}></img>
          </div>
          <div className={styles.postPage2div}>
            <p className={styles.text2}>Simple task management</p>
            <p className={styles.text3}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <Link>Learn more</Link>
          </div>
        </div>
        <div className={styles.postPage3}>
          <div className={styles.postPage1div}>
            <p className={styles.text2}>Scheduling that actually works</p>
            <p className={styles.text3}>
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
            <Link>Learn More</Link>
          </div>
          <div>
            <img className={styles.Group18} src={Group18}></img>
            <img src={MaskGroup2}></img>
          </div>
        </div>
      </Container>
      <div className={styles.aboutUs}>
        <div className={styles.title1}>What people say about us</div>
        <div className={styles.sectionTwo}>
          <Container>
            <div
              className={styles.cards}
              style={{
                color: "#000",
              }}
            >
              <div
                style={{
                  transform: `translateX(${-10 * pos}%)`,
                  transition: "300ms",
                }}
              >
                {new Array(10).fill(0).map((_, index) => (
                  <Item
                    index={index}
                    text="Give everyone you work with—inside and outside your emoji, keep conversations focused in channels, and simplify all your communication into one place."
                    Name="Amy Klassen"
                  />
                ))}
              </div>
            </div>
            <div className={styles.btn9}>
              <button onClick={goLeft} className={styles.button86}>
                Left
              </button>
              <button onClick={goRight} className={styles.button86}>
                Right
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

const Item = (props) => {
  return (
    <Card style={{ width: 400, height: 400, marginRight: 16 }}>
      <Card.Body>
        <div className={styles.container11}>
          <div className={styles.row1}>
            <FaStar color="#FFBB00" size={30} />
            <FaStar color="#FFBB00" size={30} />
            <FaStar color="#FFBB00" size={30} />
            <FaStar color="#FFBB00" size={30} />
          </div>

          <Card.Text className={styles.text22}>{props.text}</Card.Text>
          <div className={styles.Amy}>
            <img src={Any}></img>
            <Card.Title>{props.Name}</Card.Title>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
