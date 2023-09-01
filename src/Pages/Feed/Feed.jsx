import Spinner from "../../../UI/Spinner";
import { useFeeds } from "./useFeed";

import Form from "../Form/Form";

import Card from "../../Components/Card";

const Feed = () => {
  const { isLoading, feeds } = useFeeds();

  if (isLoading) return <Spinner />;

  return (
    <div>
      {feeds.map((feed) => (
        <Card feed={feed} key={feed.id} />
      ))}

      <Form />
    </div>
  );
};

export default Feed;
