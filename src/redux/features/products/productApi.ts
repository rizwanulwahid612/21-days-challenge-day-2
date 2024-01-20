//import { api } from "@/redux/api/apiSlice";

import { api } from "../../api/apiSlice";

const productApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => "/products",
    }),
    singleProduct: builder.query({
      query: (id) => `/product/${id}`,
    }),
  }),
});
export const { useGetProductsQuery, useSingleProductQuery } = productApi;
