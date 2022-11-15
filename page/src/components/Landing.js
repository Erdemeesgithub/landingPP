import styles from "../styles/components/Landing.module.css";
import React, { useState } from "react";
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

const BaseUrl = "https://dummyapi.io/data/v1/";

export const Landing = () => {
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
    <div className={styles.Container}>
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
      <div className={styles.aboutUs}></div>
      <div className={styles.footer}></div>
    </div>
  );
};
