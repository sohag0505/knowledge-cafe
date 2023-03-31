import React from "react";
import "./Bookmark.css";

const Bookmark = (props) => {
  const { bookmark } = props;

  return (
    <div className="bookmark-container">
      <h3>Bookmarked Blogs : {bookmark.length}</h3>
      {bookmark.map((bookmark) => (
        <p>{bookmark.title}</p>
      ))}
    </div>
  );
};

export default Bookmark;
