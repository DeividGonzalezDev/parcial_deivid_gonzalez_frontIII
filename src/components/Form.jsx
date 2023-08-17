import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [favoriteBook, setFavoriteBook] = useState('');
  const [urlfavoriteBook, setUrlFavoriteBook] = useState('');
  const [urlfavoriteBookRead, setUrlFavoriteBookRead] = useState('');
  const regexName = /^(?!\s)[A-Za-záéíóúÁÉÍÓÚñÑ\s]{3,}$/
  const regexBook = /.{6,}/
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!regexName.test(name) || !regexBook.test(favoriteBook) || !regexBook.test(urlfavoriteBook)){ 
      setIsError(true)
      return
    }
    setIsError(false)
    onSubmit({id: Date.now(), name, favoriteBook, urlfavoriteBook, urlfavoriteBookRead});
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='flex flex-col p-5 gap-5 bg-gray-900 w-80 items-center rounded-md shadow-lg shadow-black'>
        <h2 className='text-2xl font-bold text-gray-400 text-center'>Introduce los siguientes datos</h2>
        <input type="text"  placeholder='Ingresa tu nombre' onChange={(e) => setName(e.target.value)} value={name} className='outline-none p-2 rounded-md bg-gray-800 text-gray-400' />
        <input type="text" placeholder='Ingresa tu libro Favorito' onChange={(e) => setFavoriteBook(e.target.value)} value={favoriteBook} className='outline-none p-2 rounded-md bg-gray-800 text-gray-400' />
        <input type="text" placeholder='Ingresa la url de la imagen' onChange={(e) => setUrlFavoriteBook(e.target.value)} value={urlfavoriteBook} className='outline-none p-2 rounded-md bg-gray-800 text-gray-400' />
        <input type="text" placeholder='Ingresa la url del libro' onChange={(e) => setUrlFavoriteBookRead(e.target.value)} value={urlfavoriteBookRead} className='outline-none p-2 rounded-md bg-gray-800 text-gray-400' />
        <button type='submit' className='bg-gray-800 px-4 py-2 rounded-md text-gray-500 hover:bg-gray-700 transition-colors'>Enviar</button>
      </form>

      {isError && <p className='text-red-500'>Por favor chequea que la información sea correcta</p>}
    </div>
  )
}

export default Form;