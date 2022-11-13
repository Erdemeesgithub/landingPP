import styles from "../styles/components/Landing.module.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import meet from "../assets/meet.png";
import icon from "../assets/icon.png";
import event from "../assets/event.png";
import group from "../assets/Group.png";
import { useEffect } from "react";
import axios from "axios";

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
      <div className={styles.postPage2}></div>
      <div className={styles.postPage3}></div>
      <div className={styles.aboutUs}></div>
      <div className={styles.footer}></div>
    </div>
  );
};
