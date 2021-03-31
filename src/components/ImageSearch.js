import React, { useState } from "react";

const ImageSearch = ({ searchText }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    searchText(text);
  };

  return (
    <div className="searchBoxContainer">
      <form onSubmit={onSubmit} className="formContainer">
        <div className="inputBox">
          <input
            onChange={(e) => setText(e.target.value)}
            className="inputBar"
            type="text"
            placeholder="Search Image Term..."
          />
          <button className="buttonBox" type="submit">
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default ImageSearch;
