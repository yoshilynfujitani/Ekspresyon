import { Link } from "react-router-dom";
import { useDeleteFeed } from "../Pages/Feed/useDeleteFeed";
import { useUser } from "../Pages/Auth/useUser";

function Card({ feed }) {
  const { id: feedId, title, content, genre } = feed;
  const { isDeleting, deleteFeed } = useDeleteFeed();
  const { user, isLoading } = useUser();
  if (isLoading) return <Spinner />;

  return (
    <div>
      {/* DAISY */}
      <div className="card w-96  bg-primary-content shadow-xl" key={feedId}>
        <div className="card-body text-base-300">
          <h2 className="card-title text-base-200">{title}</h2>
          <p>{content}</p>
          <div className="badge badge-primary">{genre}</div>
          <div className="card-actions justify-end">
            {user.id === feed.u_id ? (
              <button
                className="btn btn-sm btn-error"
                onClick={() => deleteFeed(feedId)}
                disabled={isDeleting}
              >
                Delete
              </button>
            ) : (
              ""
            )}
            <Link to={`/feed/${feedId}`}>
              <div className="btn btn-sm">View</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
