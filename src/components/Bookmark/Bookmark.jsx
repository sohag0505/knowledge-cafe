import React from "react";

const Bookmark = (props) => {
  const { bookmark } = props;
  return (
    <div>
      <h5>Bookmarked Blogs : {bookmark.length}</h5>
    </div>
  );
};

export default Bookmark;
