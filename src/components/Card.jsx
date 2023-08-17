//import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({dataCard}) => {
  return (
    <div>
      <h1>Usuario: {dataCard.name}</h1>
      <p>Libro Favorito: {dataCard.favoriteBook}</p>
      <div>X</div>
    </div>
  )
}

Card.propTypes = {
  dataCard: PropTypes.shape({
    name: PropTypes.string.isRequired,
    favoriteBook: PropTypes.string.isRequired,
  }).isRequired,
};

export default Card