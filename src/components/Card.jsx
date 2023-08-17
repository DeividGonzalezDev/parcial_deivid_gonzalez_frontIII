//import { useState } from 'react';
import PropTypes from 'prop-types';

const Card = ({dataCard, onDelete}) => {
  const handleOpenNewTabWithBook = () => {
    window.open(dataCard.urlfavoriteBookRead, '_blank');
  }
  return (
    <div className='flex flex-col gap-2 bg-gray-800 p-4 rounded-md w-72 relative hover:bg-gray-700 transition-colors'>
      <h1 className='text-2xl font-bold  text-gray-200'><span className='font-semibold text-xl'>Usuario:</span> {dataCard.name}</h1>
      <p className='font-semibold text-xl text-gray-200'><span className='font-bold text-lg'>Libro Favorito:</span> {dataCard.favoriteBook}</p>
      <div className='absolute top-2 right-2 text-gray-400 hover:text-red-500 p-1 cursor-pointer' onClick={() => {onDelete(dataCard.id)}}>X</div>
      <div className="container-image w-64">
        <img src={dataCard.urlfavoriteBook} alt="" className='rounded-md' />
      </div>
      <button className='bg-green-700 px-4 py-2 rounded-md text-gray-200 hover:bg-green-600 transition-colors' onClick={handleOpenNewTabWithBook}>Ver Libro</button>
    </div>
  )
}

Card.propTypes = {
  dataCard: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    favoriteBook: PropTypes.string.isRequired,
    urlfavoriteBook: PropTypes.string.isRequired,
    urlfavoriteBookRead: PropTypes.string.isRequired
  }).isRequired,
  onDelete: PropTypes.func.isRequired
};

export default Card