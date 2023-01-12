
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './components/List';


function App() {
  const [puppyList, setPuppyList] = useState([]);

  const getPuppies = () => {
    axios.get('http://localhost:3001/api/puppies')
    .then(res => {
      console.log(res)
      setPuppyList(res.data)
  })
  .catch(err => {
      console.log(err)
  })
  }

  useEffect(() => {
    getPuppies();
  }, []);

  

  return (
    <div className="App">
      <List puppyList={puppyList}/>
          {/* <ul>
            {
            puppyList.map((puppyList:Puppy) => <li key={puppyList.id}>{puppyList.name}</li>)
            }
        </ul> */}
      
    </div>
  );
}

export default App;
