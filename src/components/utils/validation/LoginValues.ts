import * as Yup from "yup";

const loginShreme = Yup.object({
  userEmail: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  userPassword: Yup.string().required("Password is required"),
});
export default loginShreme;
