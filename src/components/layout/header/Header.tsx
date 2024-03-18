import scss from "./Header.module.scss";
import logo from "../../../assets/logo.svg";
import imgUser from "../../../assets/userImg.svg";
import like from "../../../assets/likeImg.svg";
import bag from "../../../assets/bagImg.svg";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navigateFavorite = () => {
    navigate("/favorite");
  };
  return (
    <div className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div>
            <img className={scss.logo} src={logo} alt="" />
          </div>
          <div className={scss.section}>
            <div className={scss.aside}>
              <img src={imgUser} alt="" />
              <p>Войти</p>
            </div>
            <div onClick={navigateFavorite} className={scss.aside}>
              <img src={like} alt="" />
              <p>Избранные</p>
            </div>
            <div className={scss.aside}>
              <img src={bag} alt="" />
              <p>Корзина</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
