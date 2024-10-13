import React, { useState } from 'react';
import './CardDetailsHeader.css';
import ShareModal from '../ShareModal/ShareModal';
const CardDetailsHeader = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!isModalOpen); // Toggle modal visibility
  };

  const toggleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  // Function to copy the current page link
  const copyLinkToClipboard  = () => {
    const currentUrl = window.location.href; // You can customize this URL if needed
    navigator.clipboard.writeText(currentUrl).then(
      () => {
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 1000); // Remove the message after 1 seconds
      },
      (err) => {
        setCopySuccess(false);
      }
    );
  };

  return (
    <>
      <header className="card-details-header">
        <nav className="nav-buttons">
          {/* bookmark button */}
            <button className="card-details-bookmark-btn" onClick={toggleBookmark}>
            {bookmarked ? (
                <>
            <img src="/bookmarked.svg" alt="bookmark-icon" className="icon" />
            <span className="tooltip-text">Bookmarked</span>
            </>
            ) : (
                <>
            <img src="/bookmark.svg" alt="bookmark-icon" className="icon" />
            <span className="tooltip-text">Save to Bookmarks</span>
                </>
            )}
            </button>

            {/* link button */}
            <button className="link-btn" onClick={copyLinkToClipboard }>
            {copySuccess ? (
                <>
            <img src="/check.png" alt="link-icon" className="icon" />
            <span className="tooltip-text">Copied</span>
            </>
            ) : (
                <>
            <img src="/hyperlink.png" alt="link-icon" className="icon" />
            <span className="tooltip-text">Copy Link</span>
                </>
            )}
            </button>
            
            {/* share button */}
            <button onClick={toggleModal} className='share-btn'><img src='/share.png' alt='share-icon' className='share-icon'/> share</button>
        </nav>
      </header>
      <hr></hr>
      {/* Modal */}
      <ShareModal isOpen={isModalOpen} closeModal={toggleModal} />
    </>
  );
};

export default CardDetailsHeader;
