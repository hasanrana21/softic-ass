import React, { useEffect } from "react";
import { useRouter } from "next/router";
import MainLayout from "@/components/layouts/MainLayout";
import axios from "axios";

const Details = () => {
  const router = useRouter();
  const { id } = router.query;
  const fetchPost = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log("siglePost", res);
      });
  };

  useEffect(() => {
    fetchPost();
  }, []);
  return (
    <MainLayout>
      <p>this is post details page/{id}</p>
    </MainLayout>
  );
};

export default Details;
