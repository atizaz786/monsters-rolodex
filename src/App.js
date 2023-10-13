import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  const handleChange = (e) => { setSearchField(e.target.value) }

  const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => {
        setMonsters(users)
        console.log(users)
      })
  }, [])


  return (
    <div className="App bg-gray-100 bg-gradient">
      <h1 className='font-bold text-6xl justify-center creepster'> Monsters Rolodex </h1>
      <input className='w-1/2 mx-auto mt-4 p-2 rounded-md shadow-md' type='search' placeholder='Search Monsters' onChange={handleChange} />
      <Card monsters={filteredMonsters} />


    </div>
  );
}

export default App;
