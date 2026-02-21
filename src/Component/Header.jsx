import { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/Context";

export default function Header() {
  const [theme, setTheme] = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>

        <p className="theme-changer" onClick={handleTheme}>
          <i className="fa-solid fa-moon"></i>&nbsp;&nbsp;
          {theme === "light" ? "Dark Mode" : "Light Mode"}
        </p>
      </div>
    </header>
  );
}
