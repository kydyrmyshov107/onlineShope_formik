// import { useState } from "react";
// import { useLoginMutation } from "../../../redux/api/auth";
// import { Link, useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// // import LoginShreme from "../../utils/validation/LoginValues";

// const Login = () => {
//   const [userEmail, setUserEmail] = useState("");
//   const [userPassword, setUserPassword] = useState("");
//   const [loginPost] = useLoginMutation();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await loginPost({
//         email: userEmail,
//         password: userPassword,
//       });

//       if ("data" in response) {
//         localStorage.setItem("auth_token", response.data.token);
//         navigate("/");
//       } else {
//         console.error("Login failed:", response.error);
//       }
//     } catch (error) {
//       console.error("Login failed:", error);
//     }
//   };

//   const handleEmailChange = (e) => {
//     setUserEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setUserPassword(e.target.value);
//   };

//   return (
//     <div>
//       <h2>Login</h2>
//       <div>
//         <label htmlFor="userEmail">Email</label>
//         <input
//           type="email"
//           id="userEmail"
//           name="userEmail"
//           placeholder="Email"
//           value={userEmail}
//           onChange={handleEmailChange}
//         />
//       </div>

//       <div>
//         <label htmlFor="userPassword">Password</label>
//         <input
//           type="password"
//           id="userPassword"
//           name="userPassword"
//           placeholder="Password"
//           value={userPassword}
//           onChange={handlePasswordChange}
//         />
//       </div>

//       <div>
//         <button type="submit" onClick={handleSubmit}>
//           Login
//         </button>
//         <Link to="/register">Register</Link>
//       </div>
//     </div>
//   );
// };

// export default Login;

//!v

import { useLoginMutation } from "../../../redux/api/auth";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useFormik } from "formik";
import loginShreme from "../../utils/validation/LoginValues";
import scss from "./LoginSection.module.scss";

const Login = () => {
  const [loginPost] = useLoginMutation();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      userEmail: "",
      userPassword: "",
    },
    validationSchema: loginShreme,
    onSubmit: async (values) => {
      const response = await loginPost({
        email: values.userEmail,
        password: values.userPassword,
      });

      if ("data" in response) {
        localStorage.setItem("auth_token", response.data.token);
        navigate("/");
      } else {
        console.error("Login failed:", response.error);
      }
    },
  });

  return (
    <>
      <div className={scss.Login}>
        <div className="container">
          <form className={scss.form} onSubmit={formik.handleSubmit}>
            <p>Вход</p>
            <div className={scss.content}>
              <div className={scss.labelInput}>
                <label htmlFor="userEmail">Логин</label>
                <input
                  type="email"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Введите логин "
                  value={formik.values.userEmail}
                  onChange={formik.handleChange}
                />
                {formik.touched.userEmail && formik.errors.userEmail ? (
                  <div>{formik.errors.userEmail}</div>
                ) : null}
              </div>

              <div className={scss.labelInput}>
                <label htmlFor="userPassword">Пароль</label>
                <input
                  type="password"
                  id="userPassword"
                  name="userPassword"
                  placeholder="Введите пароль "
                  value={formik.values.userPassword}
                  onChange={formik.handleChange}
                />
                {formik.touched.userPassword && formik.errors.userPassword ? (
                  <div>{formik.errors.userPassword}</div>
                ) : null}
              </div>
              <div className={scss.last}>
                <button type="submit">Login</button>
                <span style={{ color: "gray" }}>или</span>
                <Link to="/register">зарегистрироваться</Link>
                <span>Забыли пароль?</span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;

!2;

// import { useLoginMutation } from "../../../redux/api/auth";
// import { Link, useNavigate } from "react-router-dom";
// import "react-toastify/dist/ReactToastify.css";
// import { useFormik } from "formik";
// import LoginShreme from "../../utils/validation/LoginValues";

// const Login = () => {
//   const [loginPost] = useLoginMutation();
//   const navigate = useNavigate();

//   const formik = useFormik({
//     initialValues: {
//       userEmail: "",
//       userPassword: "",
//     },
//     validationSchema: LoginShreme,
//     onSubmit: async (values, { resetForm }) => {
//       const response = await loginPost({
//         email: values.userEmail,
//         password: values.userPassword,
//       });

//       if ("data" in response) {
//         localStorage.setItem("auth_token", response.data.token);
//         alert("Login successful!");
//         navigate("/");
//       } else {
//         console.error("Login failed:", response.error);
//       }

//       resetForm();
//     },
//   });

//   return (
//     <div>
//       <h2>Login</h2>
//       <form onSubmit={formik.handleSubmit}>
//         <input
//           type="email"
//           placeholder="Email"
//           name="userEmail"
//           value={formik.values.userEmail}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.userEmail && formik.errors.userEmail ? (
//           <div>{formik.errors.userEmail}</div>
//         ) : null}

//         <input
//           type="text"
//           id="userPassword"
//           name="userPassword"
//           placeholder="Password"
//           value={formik.values.userPassword}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//         />
//         {formik.touched.userPassword && formik.errors.userPassword ? (
//           <div>{formik.errors.userPassword}</div>
//         ) : null}

//         <button type="submit">Login</button>
//         <Link to="/register">Register</Link>
//       </form>
//     </div>
//   );
// };

// export default Login;
