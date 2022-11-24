import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState({});
  const [user, setUser] = useState({});
  const [comments, setComments] = useState([]);
  const fetchPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        // console.log("siglePost", res.data);
        setPost(res?.data);
      });
  };
  const fetchUser = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  };

  const fetchComments = () => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((res) => {
      const data = res.data;
      const allComments = data.filter((item) => item?.postId === parseInt(id));
      setComments(allComments);
    });
  };

  useEffect(() => {
    fetchPost();
    fetchUser();
    fetchComments();
  }, []);
  return (
    <MainLayout>
      <div className="p-10">
        {/* USER DETAILS */}
        <div className="flex space-x-4 mb-7">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVWT916ZIZzh7ZTuRB9cq3yVWptueIy-eKYw&usqp=CAU"
            alt=""
            className="w-12 h-12 rounded-full aspect-[4/3]"
          />
          <div>
            <h5 className="text-lg text-primary-3/80 font-medium">
              {user?.name}
            </h5>
            <p className="text-primary-3/80">{user?.email}</p>
          </div>
        </div>

        {/* POST DETAILS */}
        <div className="border-b border-primary-3 pb-7">
          <h3 className="text-xl font-medium mb-3 text-primary-2/70">
            {post?.title}
          </h3>
          <p className="text-lg">{post?.body}</p>
        </div>

        {/* COMMENTS SECTION */}
        <div className="pt-7">
          <h2 className="text-xl font-medium mb-7">Comments</h2>
          {comments.map((comment, key) => (
            <div
              key={key}
              className="grid grid-flow-row grid-cols-12 mb-5 w-[90%]"
            >
              <div className="col-span-1 w-12 h-12 rounded-full bg-primary-1"></div>
              <div className="col-span-11 px-4 py-2 rounded-lg bg-primary-3/10">
                <h5 className="text-lg font-medium mb-2 text-primary-1">
                  {comment?.name}
                </h5>
                <p className="text-primary-3/80 mb-4">{comment?.email}</p>
                <p>{comment?.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MainLayout>
  );
};

export default Details;
