import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./features/animeApiSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [animeApi.reducerPath]: animeApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(animeApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
