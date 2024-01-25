import React from "react";

const SeachPage = () => {
  return (
    <div>
      <div className="py-10 page-container">
        <div className="flex mb-10">
          <div className="flex-1">
            <input
              type="text"
              className="w-full p-4 bg-slate-800 text-white outline-none"
              placeholder="Type here to search..."
            />
          </div>
          <button className="p-4 bg-primary text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SeachPage;
