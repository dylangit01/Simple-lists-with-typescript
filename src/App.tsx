import React, {useState} from 'react';
import './App.css';

function App() {
  
  const [people, setPeople] = useState([
		{
			name: 'James Born',
			url: '',
			age: 35,
			note: 'Welcome to the money world',
		},
		{
			name: 'John Dow',
			url: '',
			age: 37,
		},
	]);

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
    </div>
  );
}

export default App;
