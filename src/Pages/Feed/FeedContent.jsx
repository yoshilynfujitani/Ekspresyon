import React from "react";
import { useParams } from "react-router-dom";
import { useFeeds } from "./useFeed";
import Spinner from "../../../UI/Spinner";

const FeedContent = () => {
  const { feeds, isLoading } = useFeeds();
  const id = useParams();

  if (isLoading) return <Spinner />;

  const contents = feeds.filter((item) => item.id === Number(id.id))[0];

  return (
    <div>
      <div
        className="card w-96  bg-primary-content shadow-xl"
        key={contents.feedId}
      >
        <div className="card-body text-base-300">
          <h2 className="card-title text-base-200">{contents.title}</h2>
          <p>{contents.content}</p>
          <div className="badge badge-primary">{contents.genre}</div>
        </div>
      </div>
    </div>
  );
};

export default FeedContent;
