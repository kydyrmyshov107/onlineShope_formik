import * as Yup from "yup";

export const registerSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  userName: Yup.string().required("Username is required"),
});
