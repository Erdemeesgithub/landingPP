import { FaStar } from "react-icons/fa";
import Any from '../assets/Ellipse.png'
import styles from  "../styles/components/Review.module.css"


export const Review = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row1}>
        <FaStar />
        <FaStar />
        <FaStar />
        <FaStar />
      </div>
      <div className={styles.row2}>
        Give everyone you work with—inside and outside your emoji, keep
        conversations focused in channels, and simplify all your communication
        into one place.
      </div>
      <div className={styles.row3}>
        <img className={styles.img1} src={Any}></img>
        <div>Amy Klassen</div>
      </div>
    </div>
  );
};
