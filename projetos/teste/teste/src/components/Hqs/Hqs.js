import React, { useState } from 'react'
import NavBar from '../../navBar';
import Body from '../../body';

const Hqs = () => {
  const [category, setCategory] = useState('Hqs'); // Definindo a variável de estado category
  
  const handleCategoryChange = (category) => {
    setCategory(category);
  };

  return (
    <>
    <NavBar/>
    <Body category={'hqs'} />
    
  </>
  )
}

export default Hqs