/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useFormik } from "formik";
import Modal from "../../modal/Modal";
import filterImg from "../../../assets/filter.svg";
import scss from "./Home.module.scss";
import heartImg from "../../../assets/Vector.svg";
import { useNavigate } from "react-router-dom";
import * as product from "../../../redux/api/product";
import homeShreme from "../../utils/validation/Home";
import { useCreateFavoriteMutation } from "../../../redux/api/favorite";

const Home = () => {
  const { data, isLoading } = product.useGetProductsQuery();
  const [postProducts] = product.usePostProductsMutation();
  const [deleteItems] = product.useDeleteProductsMutation();
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [postFavorite] = useCreateFavoriteMutation();

  const formik = useFormik({
    initialValues: {
      photoUrl: "",
      quantity: 0,
      price: 0,
      productName: "",
    },
    validationSchema: homeShreme,
    onSubmit: async (values, { resetForm }) => {
      const response = await postProducts({
        productName: values.productName,
        price: values.price,
        quantity: values.quantity,
        photoUrl: values.photoUrl,
      });
      modalClose();
      console.log(response);
      resetForm();
    },
  });

  const favoriteCards = async (id: any) => {
    await postFavorite(id);
  };

  const deleteData = async (_id: any) => {
    await deleteItems(_id);
  };

  const clearUser = () => {
    localStorage.removeItem("auth_token");
    navigate("/login");
  };

  const modalIsOpen = () => {
    setModal(true);
  };

  const modalClose = () => {
    setModal(false);
  };

  return (
    <div className={scss.Home}>
      <div className="container">
        <div className={scss.addProducts} onClick={modalIsOpen}>
          <p>Фильтры</p>
          <img src={filterImg} alt="Filter" />
        </div>
        <button onClick={clearUser}>Exit</button>
        <Modal isOpen={modal} onClose={modalClose}>
          <form onSubmit={formik.handleSubmit}>
            <div className={scss.modal}>
              <p>
                Добавить новую <br /> позицию
              </p>
              <span onClick={modalClose}>&#10006;</span>
            </div>
            <div className={scss.inputs}>
              <input
                type="text"
                name="productName"
                placeholder="productName"
                value={formik.values.productName}
                onChange={formik.handleChange}
              />
              {formik.touched.productName && formik.errors.productName ? (
                <div>{formik.errors.productName}</div>
              ) : null}
              <input
                name="quantity"
                type="number"
                placeholder="quantity"
                value={formik.values.quantity}
                onChange={formik.handleChange}
              />
              {formik.touched.quantity && formik.errors.quantity ? (
                <div>{formik.errors.quantity}</div>
              ) : null}

              <input
                type="number"
                name="price"
                placeholder="price"
                value={formik.values.price}
                onChange={formik.handleChange}
              />
              {formik.touched.price && formik.errors.price ? (
                <div>{formik.errors.price}</div>
              ) : null}
              <input
                type="text"
                name="photoUrl"
                placeholder="photoUrl"
                value={formik.values.photoUrl}
                onChange={formik.handleChange}
              />
              {formik.touched.photoUrl && formik.errors.photoUrl ? (
                <div>{formik.errors.photoUrl}</div>
              ) : null}
            </div>
            <div className={scss.buttons}>
              <button onClick={modalClose} className={scss.buttonOne}>
                Отменить
              </button>
              <button className={scss.buttonTwo} type="submit">
                Сохранить
              </button>
            </div>
          </form>
        </Modal>
        {isLoading ? (
          <h1>Loading ...</h1>
        ) : (
          <div className={scss.aside}>
            {data?.map((item) => (
              <div className={scss.render} key={item._id}>
                <img src={item.photoUrl} alt="Product" />
                <div className={scss.texts}>
                  <p>NEW NOW</p>
                  <img
                    onClick={() => favoriteCards(item._id)}
                    className={scss.img}
                    src={heartImg}
                    alt="Heart"
                  />
                </div>
                <p>{item.productName}</p>
                <p>{item.quantity}</p>
                <p>{item.price}</p>
                <button onClick={() => deleteData(item._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
