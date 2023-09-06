import Spinner from "../../../UI/Spinner";
import { useFeeds } from "./useFeed";

import Form from "../Form/Form";

import Card from "../../Components/Card";
import Pagination from "../../Components/Pagination";
import Filter from "../../../UI/Filter/Filter";
import Modal from "../../../UI/Modal";

const Feed = () => {
  const { isLoading, feeds, count } = useFeeds();

  if (isLoading) return <Spinner />;

  return (
    <div className="min-h-screen flex flex-col justify-between py-10">
      <div className="">
        <Filter />
        <div className="flex flex-col items-center justify-center">
          <div className="grid gap-5 md:grid-cols-3">
            {feeds.map((feed) => (
              <Card feed={feed} key={feed.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="">
        <Form />
        <Pagination count={count} />
      </div>
    </div>
  );
};

export default Feed;
