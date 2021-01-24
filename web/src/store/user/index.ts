import { LoggedUser } from "~graphql/generated/graphql";
import store from "~store";

type Data = Omit<LoggedUser, "__typename">;

type Action = {
  type: string;
  data?: Data;
};

const defaultUser = {};
const SET_USERDATA = "SET_USERDATA";

export default function userReducer(
  state = defaultUser,
  action: Action
): Partial<LoggedUser> {
  switch (action.type) {
    case SET_USERDATA: {
      return {
        ...state,
        ...action.data,
      };
    }
    default:
      return state;
  }
}

export const userActions = {
  setUserNameAction: (data: Data): Action => {
    return store.dispatch({
      type: SET_USERDATA,
      data,
    });
  },
};
