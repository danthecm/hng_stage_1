import "./App.css";
import { Outlet } from "react-router-dom";
import Footer from "./components/common/Footer";

const App = () => {
  return (
    <>
      <Outlet />

      <Footer />
    </>
  );
};

export default App;
