import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "@/components/ui/loader";

export default function Home() {
  const [allPost, setAllPost] = useState([]);
  const [fetching, setFetching] = useState(false);
  const fetchPosts = () => {
    setFetching(true);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setAllPost(res.data);
      })
      .finally(() => {
        setFetching(false);
      });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <MainLayout>
      {fetching ? (
        <Loader />
      ) : (
        <div className="px-6 py-4">
          <Card posts={allPost} />
        </div>
      )}
    </MainLayout>
  );
}
