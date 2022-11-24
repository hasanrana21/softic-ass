import React from "react";
import Link from "next/link";

const Card = (props) => {
  const { posts } = props;
  const wordLimit = (item, type) => {
    if (item.length < 100) {
      return item.substr(0, 25) + "...";
    } else if (item.length > 100) {
      return item.substr(0, 150) + "...";
    } else {
      return item + "...";
    }
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
            <span className="bg-primary-1 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline text-white">
              Comment
            </span>
            <span className="bg-primary-2/70 px-4 py-1 rounded cursor-pointer mdi mdi-comment-text-multiple-outline text-white">
              Delete
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
