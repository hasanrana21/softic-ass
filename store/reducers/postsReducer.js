const initialState = {
  all_post: [],
  fetching: true,
  user_post: {},
  user: {},
  all_comments: [],
};

export const postsReducer = (state = initialState, action) => {
  const { payload, type } = action;
  if (type === "SET_ALL_POSTS") {
    return {
      ...state,
      all_post: payload.all_post,
      fetching: payload.fetching,
    };
  }
  if (type === "SET_POST") {
    return {
      ...state,
      user_post: payload.user_post,
      fetching: payload.fetching,
    };
  }
  if (type === "SET_USER") {
    return {
      ...state,
      user: payload.user,
      fetching: payload.fetching,
    };
  }
  if (type === "SET_COMMENTS") {
    return {
      ...state,
      all_comments: payload.all_comments,
      fetching: payload.fetching,
    };
  }

  return state;
};
