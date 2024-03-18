import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getFavorite: build.query<
      FAVORITE.GetFavoriteResponse,
      FAVORITE.GetFavoriteRequest
    >({
      query: () => ({
        url: "/favorites-products",
        // method: "GET",
      }),
      providesTags: ["favorite"],
    }),
    createFavorite: build.mutation({
      query: (id) => ({
        url: `favorites-products/${id}`,
        method: "POST",
      }),
      invalidatesTags: ["favorite"],
    }),
  }),
});
export const { useGetFavoriteQuery, useCreateFavoriteMutation } = api;
