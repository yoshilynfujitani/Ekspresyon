import { useDeleteFeed } from "../Pages/Feed/useDeleteFeed";

function Card({ feed }) {
  const { id: feedId, title, content, genre } = feed;
  const { isDeleting, deleteFeed } = useDeleteFeed();

  return (
    <div>
      {" "}
      <div key={feedId}>
        {title}
        {content}
        {genre}
        <button onClick={() => deleteFeed(feedId)} disabled={isDeleting}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
