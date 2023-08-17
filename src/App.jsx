import { useState } from 'react'
import Form from './components/Form'
import './index.css'
import Card from './components/Card';

function App() {
  const [dataCards, setDataCards] = useState();
const handleSubmit = (dataCard) => {
  setDataCards((dataCards) => dataCards ? [...dataCards, dataCard] : [dataCard]);
}

const onDelete = (id) => {
  setDataCards((dataCards) => dataCards.filter((dataCard) => dataCard.id !== id));
}
  return (
   <div className="App flex flex-col bg-gray-950 min-h-screen p-10 items-center w-full gap-5">
    <h1 className='text-5xl font-extrabold text-gray-500 text-center'>Introduce tu Libro Favorito</h1>
    <Form onSubmit={handleSubmit} />
      <h2 className='text-2xl font-bold text-gray-400 text-center '>Libros Favoritos</h2>
    <div className="cards-container flex gap-2 flex-wrap w-full justify-center">
      {dataCards && dataCards.length > 0 && dataCards.map((dataCard, index) => <Card 
      key={index} dataCard={dataCard} onDelete={onDelete}/>)}

    </div>
   </div> 
  )
}

export default App
