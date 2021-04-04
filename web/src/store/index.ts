import { configureStore } from "@reduxjs/toolkit";
import { mergeOnLocalStorage } from "~utils";
import user, { userActions, SET_USERDATA, Action } from "./user";
import tweets, { tweetsActions } from "./tweets";

const middleware = () => (next: (arg0: Action) => void) => (action: Action) => {
  if (action.type === SET_USERDATA) {
    mergeOnLocalStorage(action.data);
  }
  next(action);
};

const store = configureStore({
  reducer: {
    user,
    tweets,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

export type RootStoreState = ReturnType<typeof store.getState>;
export default store;
export const actions = {
  ...userActions,
  ...tweetsActions,
};
