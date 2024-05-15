import Carousel from 'react-bootstrap/Carousel';
import React, { useState } from 'react';
import CarouselItem from './CarouselItem';
import './Carousel.css';


function MyCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  // Função para dividir os cartões em grupos de três
  const chunkArray = (array, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const chunkedCards = chunkArray(props.cards, 3);

  return (
    <>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        {chunkedCards.map((chunk, chunkIndex) => (
          <Carousel.Item key={chunkIndex}>
            <div className="d-flex justify-content-around">
              {chunk.map((card, cardIndex) => (
                <CarouselItem key={cardIndex} cardIndex={cardIndex} chunkIndex={chunkIndex} card={card} />
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
export default MyCarousel;
