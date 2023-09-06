import React from "react";
import { useSearchParams } from "react-router-dom";

const Pagination = ({ count }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Get the current page from the URL search params or default to 1
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = Math.ceil(count / 9);

  function previous() {
    const prevPage = currentPage > 1 ? currentPage - 1 : 1;
    searchParams.set("page", prevPage);
    setSearchParams(searchParams);
  }

  function next() {
    const nextPage = currentPage < pageCount ? currentPage + 1 : pageCount;
    searchParams.set("page", nextPage);
    setSearchParams(searchParams);
  }

  return (
    <div>
      <div className="join">
        <button
          className="join-item btn"
          onClick={previous}
          disabled={currentPage === 1}
        >
          «
        </button>
        <button className="join-item btn">{currentPage}</button>
        <button
          className="join-item btn"
          onClick={next}
          disabled={currentPage === pageCount}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default Pagination;
