import React from "react";

const Card = (props) => {
  console.log("props", props.posts);
  const { posts } = props;
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post, key) => (
        <div key={key} className="border-2 border-primary-2 p-4 rounded">
          <h3 className="text-lg font-medium mb-3">{post?.title}</h3>
          <p>{post?.body}</p>
          <div className="pt-6 border-t">
            <span>Com</span>
            <span>Del</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
