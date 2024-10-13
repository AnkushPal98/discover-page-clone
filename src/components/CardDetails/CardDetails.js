import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetails.css';
import cardData from '../Data'
import CardDetailsHeader from './CardDetailsHeader/CardDetailsHeader';
import ChatBar from './ChatBar/ChatBar';

const CardDetails = () => {

  // Scroll to the top of the page when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only on component mount

  const { id } = useParams(); // Get the card ID from the route parameter

  // Find the card by ID
  const card = cardData.flatMap((items) => items).find((c) => c.id === parseInt(id));

  if (!card) {
    return <h2>Card not found</h2>;
  }

  return (
    <>
    <CardDetailsHeader />
    <div className="card-details">
      <img src={card.imageUrl} alt={card.title} className="card-details-image" />
      <h2 style={{color: "#1e3e52"}}>{card.title}</h2>
      <p style={{color: "#1e3e52"}}>{card.description}</p>
    </div>
    <ChatBar />
    </>
  );
};

export default CardDetails;
