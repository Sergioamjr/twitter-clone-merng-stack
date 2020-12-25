import store from "~store";

const defaultUser = {};

const SET_USERDATA = "SET_USERDATA";

export default function userReducer(state = defaultUser, action) {
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
  setUserNameAction: (data) => {
    return store.dispatch({
      type: SET_USERDATA,
      data,
    });
  },
};
