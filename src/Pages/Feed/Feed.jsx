import Spinner from "../../../UI/Spinner";
import { useFeeds } from "./useFeed";

import Form from "../Form/Form";

import Card from "../../Components/Card";
import Pagination from "../../Components/Pagination";

const Feed = () => {
  const { isLoading, feeds, count } = useFeeds();

  if (isLoading) return <Spinner />;

  return (
    <div>
      {feeds.map((feed) => (
        <Card feed={feed} key={feed.id} />
      ))}

      <Form />
      <Pagination count={count} />
    </div>
  );
};

export default Feed;
