import * as Yup from "yup";

const homeShreme = Yup.object({
  photoUrl: Yup.string().required("photo url"),
  quantity: Yup.number().required("write price"),
  price: Yup.number().required("number ?"),
  productName: Yup.string().required("text"),
});
export default homeShreme;
