import { Route, Routes } from "react-router-dom";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import HomePage from "../page/HomePage";
import LoginPage from "../page/LoginPage";
import RegisterPage from "../page/RegisterPage";
import scss from "./Layout.module.scss";
import Favorite from "../page/Favorite";

const Layout = () => {
  return (
    <div className={scss.Layout}>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/favorite" element={<Favorite />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
