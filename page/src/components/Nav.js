import styles from "../styles/components/Nav.module.css";
import { BsSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

export const Nav = () => {
  const routes = [
    { name: "Products", to: "/" },
    { name: "Services", to: "Page" },
    { name: "Contacts", to: "Review" },
  ];

  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <div style={isDark ? { background: "#000", color: "#fff" } : {}}>
      <Container >
        <div className={styles.Navbar}>
          <div className={styles.logo}>
            <h1>Team</h1>
            <div>
              <BsSquareFill></BsSquareFill>
            </div>
          </div>
          <div className={styles.link}>
            {routes.map(({ name, to }) => (
              <Link className={styles.link2} 
               key={name} to={to}>
                {name}
              </Link>
            ))}
            <div>
              <button className={styles.dark} onClick={toggleTheme}>DarkMode</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
