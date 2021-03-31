import React from "react";

const ImageCard = ({ image }) => {
  const tags = image.tags.split(", ");

  return (
    <div className="wrapper">
      <img src={image.webformatURL} alt="randomImage" className="photo"></img>
      <div className="photoTitle">
        <div className="photoAuthorText">Photo by {image.user}</div>
        <ul>
          <li className="listItemText">
            <strong>Views: </strong>
            {image.views}
          </li>
          <li className="listItemText">
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
          <li className="listItemText">
            <strong>Likes: </strong>
            {image.likes}
          </li>
        </ul>
      </div>
      <div className="hashtagContainer">
        {tags.map((tag, index) => {
          return (
            <span key={index} className="hashtag">
              #{tag}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default ImageCard;
