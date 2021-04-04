import store from "~store";

const NEW_TWEET = "NEW_TWEET";
const RESET_TWEETS = "RESET_TWEETS";

export type TweetsStore = {
  newTweets: number;
};

type Action = {
  type: "NEW_TWEET" | "RESET_TWEETS";
};

const defaultStore = {
  newTweets: 0,
};

export default function reducer(
  state = defaultStore,
  action: Action
): TweetsStore {
  switch (action.type) {
    case NEW_TWEET: {
      return {
        newTweets: state.newTweets + 1,
      };
    }
    case RESET_TWEETS: {
      return {
        newTweets: 0,
      };
    }
    default: {
      return state;
    }
  }
}

export const tweetsActions = {
  addNewTweet: (): Action => store.dispatch({ type: NEW_TWEET }),
  resetTweetsCounter: (): Action => store.dispatch({ type: RESET_TWEETS }),
};
