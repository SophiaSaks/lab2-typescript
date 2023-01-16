
import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import List from './components/List';
import AddPuppy from './components/AddPuppy';

interface PuppyType {
  id: number,
  breed: string,
  name: string,
  birthDate: string, 
}

function App() {
  const [puppyList, setPuppyList] = useState<PuppyType[]>([]);

  const getPuppies = () => {
    axios.get('http://localhost:3001/api/puppies')
    .then(res => {
      setPuppyList(res.data);
  })
  .catch(err => {
      console.log(err)
  })
  }

  useEffect(() => {
    getPuppies();
  }, []);

  // const addPuppy = async (data) => {
  //   const dataObj = { name: data.name };
  //   const options = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //     }
  //   };
  //   axios.post(`http://localhost:3001/puppies/${data.bootcamp}`, JSON.stringify(dataObj), options)
  //     .then(() => console.log('Post successful'))
  //     .catch((error) => {
  //       console.error('Error:', error);
  //     });
  //     await getPuppies();
  // }

  

  return (
    <div className="App">
      <List puppyList={puppyList} />
      <AddPuppy puppyList={puppyList} setPuppyList={setPuppyList} />
      
    </div>
  );
}

export default App;
