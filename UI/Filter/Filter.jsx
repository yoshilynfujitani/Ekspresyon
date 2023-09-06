import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("genre", value);
    setSearchParams(searchParams);
  }
  return (
    <div className="relative">
      {/* <select onChange={(e) => handleClick(e.target.value)}>
        <option value="all">All</option>
        <option value="fun">Fun</option>
        <option value="secret">Secret</option>
      </select> */}
      <details className="dropdown mb-32 absolute">
        <summary className="m-1 btn ">Filter By</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </details>
    </div>
  );
};

export default Filter;
