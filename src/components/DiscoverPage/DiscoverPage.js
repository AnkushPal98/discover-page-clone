import React, { useState } from "react";
import DiscoverCard from "../DiscoverCard/DiscoverCard";
import Modal from "../modal/Modal";
import "./DiscoverPage.css";
// import "./Header.css";
import mockData from "../Data";

const DiscoverPage = () => {
  const [items, setItems] = useState(mockData[0]);
  const [activeButton, setActiveButton] = useState(0); // Track which button is active
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal open state

  // Handle filter icon click to toggle modal
  const handleFilterClick = () => {
    setIsModalOpen(true); // Open the modal
  };

  // Handle modal close
  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  // fetch data items
  const handleButtonClick = (buttonIndex) => {
    setActiveButton(buttonIndex); // Set the active button
    setItems(mockData[buttonIndex]); // Update items based on button index
  };

  // Logging the active button whenever it changes (for debugging purposes)
  // useEffect(() => {
  //   console.log("Active button = ", activeButton);
  // }, [activeButton]);

  const groupedItems = [];
  let tempRow = [];

  items.forEach((item, index) => {
    // Every even row has 1 card, every odd row has 3 cards.
    if (index % 4 === 0) {
      // Row with 1 card
      groupedItems.push([item]);
    } else {
      // Row with 3 cards
      tempRow.push(item);
      if (tempRow.length === 3) {
        groupedItems.push(tempRow);
        tempRow = [];
      }
    }
  });

  return (
    <>
      <div className={`discover-page-wrapper ${isModalOpen ? "blur" : ""}`}>
        <div className="heading">
          <img
            src="/icon/discover.png"
            alt="discover-icon"
            className="discover-icon"
          />
          <h1>Discover</h1>
        </div>
        <hr></hr>
        <header className="app-header">
          <nav className="nav-links">
            <button
              className={activeButton === 0 ? "active" : ""}
              onClick={() => handleButtonClick(0)}
            >
              Top
            </button>
            <button
              className={activeButton === 1 ? "active" : ""}
              onClick={() => handleButtonClick(1)}
            >
              Tech & Science
            </button>
            <button
              className={activeButton === 2 ? "active" : ""}
              onClick={() => handleButtonClick(2)}
            >
              Finance
            </button>
            <button
              className={activeButton === 3 ? "active" : ""}
              onClick={() => handleButtonClick(3)}
            >
              Arts & Culture
            </button>
            <button
              className={activeButton === 4 ? "active" : ""}
              onClick={() => handleButtonClick(4)}
            >
              Sports
            </button>
            <button
              className={activeButton === 5 ? "active" : ""}
              onClick={() => handleButtonClick(5)}
            >
              Entertainment
            </button>
            <button className="filter-btn" onClick={handleFilterClick}>
              <img
                src="/icon/filter.png"
                alt="filter-icon"
                className="filter-icon"
              />
              <span className="filter-tooltip-text">Personalize Discover</span>
            </button>
          </nav>
        </header>

        <div className="discover-page">
          {groupedItems.map((row, rowIndex) => (
            <div
              key={rowIndex}
              className={`discover-grid discover-grid-${row.length}`}
            >
              {row.map((item) => (
                <DiscoverCard
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  imageUrl={item.imageUrl}
                />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Modal for filter options */}
      <Modal show={isModalOpen} onClose={handleCloseModal}>
        <h2>Filter Options</h2>
        <p>Here you can add filter options for the discover page.</p>
        {/* Add any filter form elements here */}
      </Modal>
    </>
  );
};

export default DiscoverPage;
