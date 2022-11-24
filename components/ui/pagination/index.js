import React from "react";

const Pagination = (props) => {
  return (
    <ul className="flex items-center space-x-4 my-5">
      <span className="px-4 py-1 cursor-pointer rounded text-white bg-primary-3">
        Previous
      </span>
      {[...Array(props.pages)].map((page, i) => (
        <li
          key={i}
          className="text-xl px-4 py-1 bg-primary-1 cursor-pointer text-white rounded"
          onClick={() => props.handleCurrentPage(i + 1)}
        >
          {i + 1}
        </li>
      ))}
      <span className="px-4 py-1 cursor-pointer rounded text-white bg-primary-3">
        Next
      </span>
    </ul>
  );
};

export default Pagination;
