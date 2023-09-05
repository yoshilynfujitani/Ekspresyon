import React from "react";
import { useSearchParams } from "react-router-dom";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(value) {
    searchParams.set("genre", value);
    setSearchParams(searchParams);
  }
  return (
    <div>
      <select onChange={(e) => handleClick(e.target.value)}>
        <option value="all">All</option>
        <option value="fun">Fun</option>
        <option value="secret">Secret</option>
      </select>
    </div>
  );
};

export default Filter;
