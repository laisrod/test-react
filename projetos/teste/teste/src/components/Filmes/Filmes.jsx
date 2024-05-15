import React, { useState } from 'react'
import NavBar from '../../navBar';
import Body from '../../body';
import Search from '../../search';

const Filmes = () => {
  // Filtrar os cards com base na categoria selecionada
  const [order, setOrder] = useState('lancamento'); // Definindo a variável de estado order
  
  const handleOrderChange = (order) => {
    setOrder(order);
  };

  return (
    <>
      <NavBar/>
      <Search handleChange={handleOrderChange} />
      <Body category={'filmes'} orderBy={order} />
    </>
  )
}

export default Filmes