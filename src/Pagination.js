import React from "react";

const Pagination = ({ goNextPage, goPreviousPage }) => {
  return (
    <div>
      <button onClick={goNextPage}>Next</button>
      {goPreviousPage && <button onClick={goPreviousPage}>Previous</button>}
    </div>
  );
};

export default Pagination;
