import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const Form = ({onSubmit}) => {
  const [name, setName] = useState('');
  const [favoriteBook, setFavoriteBook] = useState('');
  const regexName = /^(?! )\S{3,}$/
  const regexBook = /.{6,}/
  const [isError, setIsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    if(!regexName.test(name) || !regexBook.test(favoriteBook)) {
      setIsError(true)
      return
    }
    setIsError(false)
    onSubmit({name, favoriteBook});
  }
  return (
    <div>
      <form onSubmit={handleSubmit} >
        <input type="text"  placeholder='Ingresa tu nombre' onChange={(e) => setName(e.target.value)} value={name} />
        <input type="text" placeholder='Ingresa tu libro Favorito' onChange={(e) => setFavoriteBook(e.target.value)} value={favoriteBook} />
        <button type='submit'>Enviar</button>
      </form>

      {isError && <p>Por favor chequea que la información sea correcta</p>}
    </div>
  )
}

export default Form