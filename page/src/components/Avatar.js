import Rectangle from "../assets/Rectangle.png";
import styles from "../styles/components/Avatar.module.css";
import image from "../assets/Ellipse.png"

export const Avatar = () => {
  return (
    <div className={styles.display}>
      <img src={Rectangle} className={styles.img1}></img>
      <div className={styles.container}>
        <h2>Data-Driven Design is Killing Our Instincts</h2>
        <p>
          Our latest updates and blogs about managing your team Our latest
          updates and blogs about managing your team
        </p>
        <div className={styles.information}>
            <img src={image}></img>
            <p>Jane Cooper</p>
            <p>2nd January,2022</p>
        </div>
      </div>
    </div>
  );
};
