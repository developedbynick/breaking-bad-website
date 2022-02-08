import React from "react";

function Pagination({ page, numPages, setPage }) {
  const pages = [];
  for (let i = 0; i !== numPages; i++) pages.push(i + 1);
  return (
    <div className="paginated-container">
      <div className={`inner-container`}>
        {pages.map((p, index) => {
          return (
            <button
              onClick={() => setPage(p)}
              className={`${page === index + 1 ? "active" : ""}`}
              key={p}
            >
              {p}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Pagination;
