import './AddPuppy.css';
import { useRef, MouseEvent } from 'react';

const AddPuppy = () => {
    const puppyBreed = useRef<HTMLInputElement>(null);
    const puppyName = useRef<HTMLInputElement>(null);
    const puppyBirthDate = useRef<HTMLInputElement>(null);

    const addPuppyHandler = (e: MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
    }

  return (

    <div className="AddPuppy">
        <form action="">
        <label>Breed</label>
        <input name="breed" type="text" className="AddPuppyBreed" placeholder="Breed" ref={puppyBreed}/>
        <label>Name</label>
        <input name="name" type="text" className="AddPuppyName" placeholder="Name" ref={puppyName}/>
        <label>Birth Date</label>
        <input name="birthDate" type="text" className="AddPuppyBirthDate" placeholder="yyyy-mm-dd" ref={puppyBirthDate}/>
        <button onClick={addPuppyHandler}>Add puppy</button>
        </form>
    

    </div>
  );
}

export default AddPuppy;