import React from 'react';
import './MovieDetails.css';

function MovieDetails(card) {
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<span key={i}>&#9733;</span>);
    }
    return stars;
  };

  return card.showDetails ? (
    <div>
      <div className="movie-details">
        <div>
          <img src={card.movie.dataFirst} alt={card.movie.title} />
        </div>
        <h2>{card.movie.title}</h2>
        <p>{card.movie.descricaoDetalhes}</p>
        <div className='stars'>
          {card.movie.avaliacao !== 0 ? (
            renderStars(card.movie.avaliacao)
          ) : (
            renderStars(card.movie.critica)
          )}
        </div>

        <div className="btn">
          <button onClick={card.onClose}>Fechar</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MovieDetails;
