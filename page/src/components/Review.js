import styles from "../styles/components/Review.module.css";
import avatar from "../assets/Avatar.png";
import image from "../assets/Image.png";
import avatar1 from "../assets/Avatar1.png"

export const Review = () => {
  return (
    <div className={styles.Container}>
      <div className={styles.titleArea}>
        <p className={styles.title}>10 Secrets for managing a remote team </p>
        <div>
          <img src={avatar}></img>
          <p>Shedrack eze</p>
          <p>|</p>
          <p> 2nd January,2022</p>
        </div>
      </div>
      <img src={image}></img>
      <div className={styles.essay}>
        <p>
          If you’re thinking of starting a blog of your own, but just don’t have
          a clue on what to blog about, then fear not!
        </p>
        <p>
          In this article, I have included a whole load of blog examples from a
          wide variety of different niches, all run on different blogging
          platforms like WordPress, Joomla! and Drupal.
        </p>
        <p>
          Since the beginning of the internet, millions and millions and
          millions of blogs have been created. Many have died due to lost
          interest or their owners giving up on the idea, while others have
          thrived and continue to grow, making money and earning their owners a
          steady income. It’s a constant evolution of content that keeps people
          coming back for more, especially if these blogs contact highly
          resourceful material that people find useful and interesting.
        </p>
        <p>
          Each example listed in this blog post are all different in some way
          and all bring something unique to their readers & subscribers. I want
          to show you what is possible and how you can take inspiration from
          them and create an awesome blog of your own.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
        <p>
          Some of these blogs make over $100k a month, others are just a hobby
          for their owners, but all have the same purpose at their core… the
          love of writing and sharing information.
        </p>
      </div>
      <div className={styles.comment}>
        <img className={styles.image} src={avatar}></img>
        <div>
          <p>Written by</p>
          <p className={styles.name}>Shedrack Eze</p>
          <p className={styles.CEO}>CEO team app</p>
        </div>
      </div>
      <div className={styles.hr}></div>
      <div className={styles.comSec}>
        <p className={styles.join}>Join the conversation</p>
        <div className={styles.comment1}>
          <img className={styles.avatar1} src={avatar1}></img>
          <textarea className={styles.input} placeholder="Comment"></textarea>
        </div>
      </div>
    </div>
  );
};
