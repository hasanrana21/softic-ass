const initialState = {
  all_post: [],
  fetching: true,
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

  return state;
};
