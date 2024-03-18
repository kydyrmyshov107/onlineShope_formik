import { useRegistrationMutation } from "../../../redux/api/auth";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import { registerSchema } from "../../utils/validation/RegisterValues";
import scss from "./Register.module.scss";

const Register = () => {
  const [postRegis] = useRegistrationMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      userName: "",
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      try {
        const response = await postRegis(values);
        if ("data" in response) {
          navigate("/login");
          toast.success("Registration successful. Please login.");
        } else {
          toast.error("Registration failed. Please try again.");
        }
      } catch (error) {
        console.error("Registration failed:", error);
        toast.error("Registration failed. Please try again.");
      }
    },
  });

  return (
    <div className={scss.Register}>
      <div className="container">
        <form className={scss.form} onSubmit={formik.handleSubmit}>
          <p>Регистрация</p>
          <div className={scss.content}>
            <div className={scss.inputLabel}>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                placeholder="Введите адрес почты "
              />
              {formik.touched.email && formik.errors.email && (
                <div>{formik.errors.email}</div>
              )}
            </div>
            <div className={scss.inputLabel}>
              <label htmlFor="userName">Имя</label>
              <input
                type="text"
                name="userName"
                value={formik.values.userName}
                onChange={formik.handleChange}
                placeholder="Введите ваше имя"
              />
              {formik.touched.userName && formik.errors.userName && (
                <div>{formik.errors.userName}</div>
              )}
            </div>
            <div className={scss.inputLabel}>
              <label htmlFor="password">Пароль</label>
              <input
                type="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                placeholder="Введите пароль "
              />
              {formik.touched.password && formik.errors.password && (
                <div>{formik.errors.password}</div>
              )}
            </div>
            <button type="submit">Зарегистрироваться</button>
            <Link to="/login">Уже зарегистрированы?</Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
