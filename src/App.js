import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users))
  }, [])


  return (
    <div className="App bg-gray-100">
      <h1 className='text-3xl font-bold underline flex-column justify-center'> Monsters Rolodex </h1>
      <div className='max-w-sm ml-3 mb-3 p-8 bg-white rounded-md overflow-hidden shadow-sm'>
        <img className='w-32 h-32 mx-auto rounded-full' src={logo} alt='monster' />
      </div>
    </div>
  );
}

export default App;
