import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [monsters, setMonsters] = useState([])
  const [searchField, setSearchField] = useState('')

  const handleChange = (e) => { setSearchField(e.target.value) }

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
      <input className='w-1/2 mx-auto mt-4 p-2 rounded-md shadow-md' type='search' placeholder='Search Monsters' />
      {monsters && (<div className='m-2 flex-wrap flex mt-4 justify-evenly'> {monsters.map(monster => (
        <div className='max-w-sm ml-3 mb-3 p-8 bg-color rounded-md overflow-hidden shadow-sm basis-1/3 transition transform hover:scale-105 drop-shadow-md cursor-pointer '>
          <img className='w-32 h-32 mx-auto rounded-full' src={`https://robohash.org/${monster?.id}?set=set2&size=180x180`} alt={`monster ${monster?.name}`} />
          <h2 className='text-xl font-bold text-center mt-4 inline'>{monster?.name}</h2>
          <p>{monster?.company?.catchPhrase}</p>
        </div>
      ))}


      </div>
      )}


    </div>
  );
}

export default App;
