import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/card";
import { useEffect, useState } from "react";
import Loader from "@/components/ui/loader";
import { useSelector, useDispatch } from "react-redux";
import { userPosts } from "../store/actions/postsAction";
import Pagination from "@/components/ui/pagination";

export default function Home() {
  const dispatch = useDispatch();
  const [showPosts, setShowPosts] = useState([]);
  const { all_post } = useSelector((state) => state.Posts);
  const [fetching, setFetching] = useState(false);
  const [pages, setPages] = useState(null);
  const [perPage] = useState(20);
  // const [currentPage, setCurrentPage] = useState(1);
  const fetchPosts = () => {
    dispatch(userPosts());
    const pagesNum = all_post.length / perPage;
    setPages(pagesNum);
    const slicedPosts = all_post.slice(0, 20);
    setShowPosts(slicedPosts);
  };

  const initialFetch = async () => {
    setFetching(true);
    await Promise.all([fetchPosts()]).finally(() => {
      setFetching(false);
    });
  };

  const handleCurrentPage = (currentPage) => {
    // console.log("rrr", index);
    // setCurrentPage(index);
    const startCount = currentPage * perPage - perPage;
    const endCount = currentPage * perPage;
    const paginatedPosts = all_post.slice(startCount, endCount);
    setShowPosts(paginatedPosts);
  };

  // const handlePaginate = () => {
  //   const startCount =
  //   all_post = all_post.slice(currentPage * perPage, currentPage * perPage);
  // };

  useEffect(() => {
    initialFetch();
  }, []);
  return (
    <MainLayout>
      {fetching ? (
        <Loader />
      ) : (
        <div className="px-6 py-4">
          <div className="flex justify-end">
            <Pagination pages={pages} handleCurrentPage={handleCurrentPage} />
          </div>
          <Card posts={showPosts} />
        </div>
      )}
    </MainLayout>
  );
}
