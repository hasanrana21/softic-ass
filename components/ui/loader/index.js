import React from "react";

const Loader = () => {
  return (
    <div className="h-36 flex justify-center items-center">
      <p className="text-2xl">
        Loading <span className="text-7xl text-primary-1">.</span>
        <span className="text-7xl text-primary-2">.</span>
        <span className="text-7xl text-primary-3">.</span>
      </p>
    </div>
  );
};

export default Loader;
