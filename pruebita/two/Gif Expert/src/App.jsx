import { useState } from 'react'
import './App.css'
import AddCategory from './components/AddCategory'
import DisplayGifs from './components/DisplayGifs';

function App() {
  //Estado para guardar el valor del input
  const [category, setCategory] = useState("");

  return (
      <div className='App'>
        <h2> Empieza buscando un gif</h2>
        {/* seteamos el estado para recuperarlo en el componente */}
        <AddCategory setCategory={setCategory}/>
        {/* seteamos el valor para recuperarlo en el componente */}
        <DisplayGifs category={category}/>
      </div>
  )
}

export default App
