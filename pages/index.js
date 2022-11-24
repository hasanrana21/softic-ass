import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import { useSelector, useDispatch } from "react-redux";
import { userPosts } from "../store/actions/postsAction";

export default function Home() {
  const dispatch = useDispatch();
  const [fetching, setFetching] = useState(false);
  const { all_post } = useSelector((state) => state.Posts);
  const fetchPosts = () => {
    dispatch(userPosts());
  };

  const initialFetch = async () => {
    setFetching(true);
    await Promise.all([fetchPosts()]).finally(() => {
      setFetching(false);
    });
  };

  useEffect(() => {
    initialFetch();
  }, []);
  return (
    <MainLayout>
      {fetching ? (
        <Loader />
      ) : (
        <div className="px-6 py-4">
          <Card posts={all_post} />
        </div>
      )}
    </MainLayout>
  );
}
