import React from 'react'
import Form from 'react-bootstrap/Form';
import './search.css'
function Search(props) {
  return (
    <div>
      <Form.Select onChange={(e) => props.handleChange(e.target.value)} className='filter'>
        <option >Filtrar por</option>
        <option value="lancamento"> Lançamento</option>
        <option value="cronologia"> Cronologia</option>
      </Form.Select>
    </div>
  )
}

export default Search;
