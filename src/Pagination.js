import React from "react";
import "./App.css";

const Pagination = ({ goNextPage, goPreviousPage }) => {
  return (
    <div>
      <button onClick={goNextPage}>Next</button>
      {goPreviousPage && <button onClick={goPreviousPage}>Previous</button>}
    </div>
  );
};

export default Pagination;
