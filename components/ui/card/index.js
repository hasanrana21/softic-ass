import React from "react";

const Card = (props) => {
  console.log("props", props.posts);
  const { posts } = props;
  const wordLimit = (item, type) => {
    if (item.length > 15 && type === "title") {
      return item.substr(0, 30) + "...";
    } else {
      return item + "...";
    }
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, key) => (
        <div key={key} className="border-2 border-primary-2 py-4 rounded">
          <div className="h-56 px-4">
            <h3 className="text-lg font-medium mb-3">
              {wordLimit(post?.title, "title")}
            </h3>
            <p>{post?.body}</p>
          </div>
          <div className="flex items-center justify-between mt-6 pt-2 px-4 border-t border-primary-3">
            <span className="bg-primary-1 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline">
              Comment
            </span>
            <span className="bg-primary-2 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline">
              Delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
