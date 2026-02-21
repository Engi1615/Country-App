import { Outlet } from "react-router-dom";
import Header from "./Component/Header";
import { Home } from "./Component/Home";
import { ThemeProvider } from "./contexts/Context";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <Outlet />
    </ThemeProvider>
  );
}
