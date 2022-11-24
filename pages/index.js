import MainLayout from "@/components/layouts/MainLayout";
import Card from "@/components/ui/card";
import { useEffect } from "react";
// import axios from "axios";
import Loader from "@/components/ui/loader";
import { useSelector, useDispatch } from "react-redux";
import { userPosts } from "../store/actions/postsAction";

export default function Home() {
  const dispatch = useDispatch();
  // const [allPost, setAllPost] = useState([]);
  // const [fetching, setFetching] = useState(false);
  const { all_post, fetching } = useSelector((state) => state.Posts);
  // const fetchPosts = () => {
  //   setFetching(true);
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       setAllPost(res.data);
  //     })
  //     .finally(() => {
  //       setFetching(false);
  //     });
  // };

  useEffect(() => {
    // fetchPosts();
    dispatch(userPosts());
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
