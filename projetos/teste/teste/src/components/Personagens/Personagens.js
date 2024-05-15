import React, { useState } from 'react'
import NavBar from '../../navBar';
import Body from '../../body';

const Personagens = () => {
  return (
    <>
      <NavBar/>
      <Body category={'personagens'} />
    </>
  )
}

export default Personagens;