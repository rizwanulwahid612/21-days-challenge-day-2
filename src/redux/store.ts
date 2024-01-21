import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./features/cart/cartSlice";
import productSlice from "./features/products/productSlice";
import { api } from "./api/apiSlice";
import userSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    [api.reducerPath]: api.reducer,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
