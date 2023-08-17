import { useState } from 'react'
import Form from './components/Form'
import './index.css'
import Card from './components/Card';

function App() {
  const [dataCard, setDataCard] = useState();
const handleSubmit = (dataCard) => {
  setDataCard(dataCard);
}
  return (
   <div className="App bg-slate-200 min-h-screen">
    <h1 className='text-5xl font-extrabold text-slate-500 text-center'>Introduce tu Libro Favorito</h1>
    <Form onSubmit={handleSubmit} />
    {dataCard && <Card dataCard={dataCard} />}
   </div> 
  )
}

export default App
