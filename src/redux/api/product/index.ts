import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    getProducts: build.query<
      PRODUCT.GetProductsResponse,
      PRODUCT.GetProductsRequest
    >({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
      providesTags: ["products"],
    }),
    postProducts: build.mutation<
      PRODUCT.PostProductResponse,
      PRODUCT.PostProductRequest
    >({
      query: (newProducts) => ({
        url: "/products",
        method: "POST",
        body: newProducts,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProducts: build.mutation<
      PRODUCT.DeleteProductResponse,
      PRODUCT.DeleteProductRequest
    >({
      query: (_id) => ({
        url: `/products/${_id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["products"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  usePostProductsMutation,
  useDeleteProductsMutation,
} = api;
