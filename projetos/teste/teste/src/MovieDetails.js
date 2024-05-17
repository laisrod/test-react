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

        <h2>{card.movie.title}</h2>
        <p className='descricao'>{card.movie.descricao}</p>
        <p className='streamings'>Disponível em streamings:</p>
        <img src='/image/logo-grande.png' className='imgAvailable'></img>
        <div className='stars'>
          {card.movie.avaliacao !== 0 ? (
            <div className='avaliacao'>
              <h5 className='critica'>Crítica</h5>
              {renderStars(card.movie.avaliacao)}
            </div>
          ) : (
            <div className='avaliacao'>
              <h5 >Avaliação dos Fãs</h5>
              {renderStars(card.movie.critica)}
            </div>
          )}
        </div>
        
        <div>
          <img src={card.movie.dataFirst} alt={card.movie.title} />
        </div>
        <div className="btn">
          <button onClick={card.onClose} className='btn'>Fechar</button>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
}

export default MovieDetails;
