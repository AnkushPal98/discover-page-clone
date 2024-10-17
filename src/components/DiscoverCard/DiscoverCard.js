import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./DiscoverCard.css"; // Assuming you style the card in this file.

const DiscoverCard = ({ id, title, description, imageUrl }) => {
  // console.log("id : ", id);
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  const toggleBookmark = (event) => {
    event.stopPropagation();
    setBookmarked(!bookmarked);
  };

  const showCardDetails = () => {
    navigate(`/details/${id}`); // Navigate to the detailed view with the card ID
  };

  return (
    <div className="discover-card" onClick={showCardDetails}>
      <img src={imageUrl} alt={title} className="discover-card-image" />
      <div className="discover-card-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <button className="bookmark-btn" onClick={toggleBookmark}>
        {bookmarked ? (
            <>
          <img src="/icon/bookmarked.svg" alt="bookmark-icon" className="icon" />
          <span className="card-tooltip-text">Bookmarked</span>
          </>
        ) : (
            <>
          <img src="/icon/bookmark.svg" alt="bookmark-icon" className="icon" />
          <span className="card-tooltip-text">Save to Bookmarks</span>
            </>
        )}
        
      </button>
    </div>
  );
};

export default DiscoverCard;
