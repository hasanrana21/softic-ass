import axios from "axios";

export const userPosts = () => async (dispatch) => {
  try {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        dispatch({
          type: "SET_ALL_POSTS",
          payload: {
            all_post: res.data,
            fetching: false,
          },
        });
      });
  } catch (error) {}
};

export const postFetch = (id) => async (dispatch) => {
  try {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        dispatch({
          type: "SET_POST",
          payload: {
            user_post: res.data,
            fetching: false,
          },
        });
      });
  } catch (error) {}
};

export const userFetch = (id) => async (dispatch) => {
  try {
    return await axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        dispatch({
          type: "SET_USER",
          payload: {
            user: res.data,
            fetching: false,
          },
        });
      });
  } catch (error) {}
};

export const commentsFetch = () => async (dispatch) => {
  try {
    return await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((res) => {
        dispatch({
          type: "SET_COMMENTS",
          payload: {
            all_comments: res.data,
            fetching: false,
          },
        });
      });
  } catch (error) {}
};
