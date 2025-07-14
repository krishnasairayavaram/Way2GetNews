import React from "react";
import defaultImage from "./Book.gif";
const Loading = () => {
  return (
    <div className="d-flex justify-content-center">
      <img src={defaultImage} alt="loading" />
    </div>
  );
};
export default Loading;
