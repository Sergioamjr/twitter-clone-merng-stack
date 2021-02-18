import { configureStore } from "@reduxjs/toolkit";
import { mergeOnLocalStorage } from "~utils";
import user, { userActions, SET_USERDATA } from "./user";

const middleware = () => (next) => (action) => {
  if (action.type === SET_USERDATA) {
    mergeOnLocalStorage(action.data);
  }
  next(action);
};

const store = configureStore({
  reducer: {
    user,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
export const actions = {
  ...userActions,
};
