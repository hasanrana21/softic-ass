import axios from "axios";

export const userPosts = () => async (dispatch) => {
  try {
    const response = await axios
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
