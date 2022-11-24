import React from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
// import { userPosts } from "../store/actions/postsAction";

const Card = (props) => {
  const { posts } = props;
  // const dispatch = useDispatch();
  const { all_post } = useSelector((state) => state.Posts);

  const wordLimit = (item, type) => {
    if (item.length < 100) {
      return item.substr(0, 25) + "...";
    } else if (item.length > 100) {
      return item.substr(0, 150) + "...";
    } else {
      return item + "...";
    }
  };

  const handleDelete = (id) => {
    const newPosts = all_post.filter((post) => post?.id !== parseInt(id));
    console.log("gg", newPosts);
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, key) => (
        <div key={key} className="border-2 border-primary-3/50 py-4 rounded">
          <div className="h-56 px-4">
            <Link href={`/posts/details/${post?.id}`}>
              <h3 className="text-lg font-medium mb-3 underline text-primary-2/70">
                {wordLimit(post?.title)}
              </h3>
            </Link>
            <p>{wordLimit(post?.body)}</p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-2 px-4 border-t border-primary-3">
            <Link
              href={`/posts/details/${post?.id}`}
              className="bg-primary-1 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline text-white"
            >
              <span>Comment</span>
            </Link>
            <span
              onClick={() => handleDelete(post?.id)}
              className="bg-primary-2/70 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline text-white"
            >
              Delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
