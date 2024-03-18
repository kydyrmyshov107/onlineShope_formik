import scss from "./Footer.module.scss";
import c from "../../../assets/c.svg";

const Footer = () => {
  return (
    <div className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.section}>
            <p className={scss.text}>BRANDNAME</p>

            <div className={scss.aside}>
              <p>О нас </p>
              <p>Контакты</p>
            </div>
            <div className={scss.aside}>
              <p>Способы оплаты</p>
              <p>Условия доставки</p>
            </div>
            <div className={scss.aside}>
              <p>Пользовательское соглашение</p>
              <p>Политика конфиденциальности</p>
            </div>
          </div>
          <div className={scss.bar}>
            <p>brandname.com</p>
            <img src={c} alt="" />
            <p>2023</p>
            <p>Все права защищены</p>
          </div>
        </div>
        {/* 2 */}
        <div className={scss.mainFooter}>
          <div className={scss.twoText}>
            <p>Onlineshop</p>
            <p>Onlineshop</p>
          </div>
          <div className={scss.treeText}>
            <p>Onlineshop</p>
            <p>Onlineshop</p>
            <p>Onlineshop</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
