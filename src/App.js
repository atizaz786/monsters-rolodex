import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Card from './components/card.component';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')
  const [sortation, setSortation] = useState(false)

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

 const sortedMonsters = () => {
  if (sortation) {
     return filteredMonsters.sort((a,b) => a.name - b.name); // b - a for reverse sort
  }
  else if (!sortation) {
    return filteredMonsters.sort((a,b) => b.name - a.name); // b - a for reverse sort
  }
  else {
    return filteredMonsters;
  }

 }

 const buttonClick = () => {
   setSortation(!sortation)
   console.log(sortation)
  }


  return (
    <div className="App bg-gray-100 bg-gradient">
      <h1 className='font-bold text-6xl justify-center creepster'> Monsters Rolodex </h1>
      <input className='w-1/3 mx-auto mt-4 p-2 rounded-md shadow-md' type='search' placeholder='Search Monsters' onChange={handleChange} />
      <button className='w-1/3 mx-auto mt-4 p-2 ml-3 rounded-md shadow-md' onClick={buttonClick}>Sort Monsters</button>
      <Card monsters={sortation ? filteredMonsters.sort((a,b) => a.name - b.name) : filteredMonsters.sort((a,b) => b.name - a.name) } />
    </div>
  );
}

export default App;
