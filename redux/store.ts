import { configureStore } from "@reduxjs/toolkit";
import { animeApi } from "./features/animeApiSlice";
import { mangaApi } from "./features/mangaApiSlice";

export const makeStore = () =>
  configureStore({
    reducer: {
      [animeApi.reducerPath]: animeApi.reducer,
      [mangaApi.reducerPath]: mangaApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(animeApi.middleware, mangaApi.middleware),
    devTools: process.env.NODE_ENV !== "production",
  });

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
