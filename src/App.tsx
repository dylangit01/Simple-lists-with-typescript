import React, {useState} from 'react';
import './App.css';
import List from './components/List'

interface IState {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

function App() {
  
  const [people, setPeople] = useState<IState['people']>([
		{
			name: 'James Born',
			age: 36,
			url: 'https://robohash.org/104.236.21.134.png',
			note: 'Welcome to the money world',
		},
	]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people} />
    </div>
  );
}

export default App;
