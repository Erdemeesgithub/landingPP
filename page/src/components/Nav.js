import styles from "../styles/components/Nav.module.css";
import { BsSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Nav = () => {
  const routes = [
    { name: "Products", to: "/" },
    { name: "Services", to: "Page" },
    { name: "Contacts", to: "Review" },
  ];
  return (
    <>
      <div className={styles.Container}>
        <div className={styles.logo}>
          <h1>Team</h1>
          <div>
            <BsSquareFill></BsSquareFill>
          </div>
        </div>
        <div className={styles.link}>
          {routes.map(({ name, to }) => (
            <Link key={name} to={to}>
              {name}
            </Link>
          ))}
        </div>
        <Button variant="outline-primary">Get Access</Button>
      </div>
      <hr></hr>
    </>
  );
};
