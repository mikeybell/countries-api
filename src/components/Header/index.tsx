import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";
import styles from "./header.module.css";
import { ReactComponent as Moon } from "../../assets/moon.svg";
import { ReactComponent as MoonFilled } from "../../assets/moon_filled.svg";

interface Props {
  toggleTheme: () => void;
}

export const Header = ({ toggleTheme }: Props) => {
  const theme = useContext(ThemeContext);
  const { header, title, content, button, icon } = styles;
  const moon =
    theme === "light" ? (
      <Moon className={icon} />
    ) : (
      <MoonFilled className={icon} />
    );

  return (
    <header className={header}>
      <div className={content}>
        <Link to="/">
          <h1 className={title}>Where in the world?</h1>
        </Link>
        <button className={button} onClick={toggleTheme}>
          {moon}
          Dark Mode
        </button>
      </div>
    </header>
  );
};
