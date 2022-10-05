import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const base_url = "https://api.escuelajs.co/api/v1/products";

export const productsApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  reducerPath: "productsPath",
  tagTypes: ["products"],
  endpoints: (build) => ({
    fetchProducts: build.query({
      query: () => "/",
      providesTags: ["products"],
    }),
    addProduct: build.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
      }),
      invalidatesTags: ["products"],
    }),
    deleteProduct: build.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags:['products']
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useAddProductMutation,
  useDeleteProductMutation,
} = productsApi;
