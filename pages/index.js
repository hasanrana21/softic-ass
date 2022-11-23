import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {
  const [allPost, setAllPost] = useState([]);
  const fetchPosts = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("res", res.data);
      setAllPost(res.data);
    });
  };

  useEffect(() => {
    fetchPosts();
  }, []);
  return (
    <MainLayout>
      <div className="px-6 py-4">
        <Card posts={allPost} />
      </div>
    </MainLayout>
  );
}
