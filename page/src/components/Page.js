import styles from "../styles/components/Page.module.css";
import image from "../assets/Ellipse.png";
import Rectangle from "../assets/Rectangle.png";
import { useContext } from "react";
import { ColorModeContext } from "../Context";
import { useState, useEffect } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import axios from "axios";

const baseUrl = "https://dummyapi.io/data/v1/";

export const Page = () => {
  const color = useContext(ColorModeContext);
  // const array = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(baseUrl + "user", {
        headers: {
          "app-id": "636f2f24e8d0ffd9c83fc52f",
        },
      })
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    // <div className={styles.Container1}>
    //   <div className={styles.All}>
    //     <div className={styles.Texts}>
    //       <h1>Blog Posts</h1>
    //       <p className={styles.Textss}>
    //         Our latest updates and blogs about managing your team
    //       </p>
    //       <div className={styles.card9}>
    //         {array.map(() => {
    //           return (
    //             <div className={styles.display}>
    //               <img src={Rectangle} className={styles.img1}></img>
    //               <div className={styles.container}>
    //                 <h2>Data-Driven Design is Killing Our Instincts</h2>
    //                 <p>
    //                   Our latest updates and blogs about managing your team Our
    //                   latest updates and blogs about managing your team
    //                 </p>
    //                 <div className={styles.information}>
    //                   <img src={image}></img>
    //                   <p>Jane Cooper | 2nd January,2022</p>
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     </div>
    //     <button className={styles.btn}>Next </button>
    //   </div>
    // </div>
    <div>
      {!data && <Spinner />}
      {data && data.data.map((item) => <Item {...item} />)}
    </div>
  );
};
const Item = (props) => {
  return (
    <Card style={{ width: 300, marginRight: 16 }}>
      <Card.Body>
        <Card.Title>{props.firstName}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="primary">{props.buttonText}</Button>
      </Card.Body>
    </Card>
  );
};
