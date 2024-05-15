import React, { useState } from 'react';
import MovieDetails from './MovieDetails';
import './CarouselItem.css';

function CarouselItem(props) {
  const [showDetails, setShowDetails] = useState(false);

  function handleCloseDetails() {
    setShowDetails(false);
  }

  return(
    <div key={props.cardIndex} className="card">
      <img
        className="card-img-top"
        src={props.card.dataFirst}
        alt={`Card ${props.chunkIndex * 3 + props.cardIndex}`}
      />
      <div className="overlay">
        <div className='card-title'>
          <h5 className="title">{props.card.title}</h5>
        </div>
        <div className='card-text'>
          <p className="text">{props.card.descricao}</p>
        </div>
        <div className='btn'>
          <button onClick={() => setShowDetails(true)} className="button"> Ver detalhes</button>
        </div>
      </div>
      <MovieDetails showDetails={showDetails} movie={props.card} onClose={handleCloseDetails} />
    </div>
  );
}

export default CarouselItem;
