import './List.css';
import { MouseEvent } from 'react';

interface PuppyType {
    id: number,
    breed: string,
    name: string,
    birthDate: string, 
  }

type PuppyProps = {
  puppyList: PuppyType[],
}
  

const List: React.FC<PuppyProps> = ({puppyList}): JSX.Element => {

  const detailsHandler = (e: MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const divvy = e.currentTarget.lastChild! as HTMLElement;
    if (divvy.style.display === 'none') {
      return divvy.style.display = 'block';
    }
    return divvy.style.display = 'none';
  }

  return (
    <div className="puppyList">
        <h1>Puppies</h1>
        {/* <input type="radio" name="accordion" id="cb1" />
		    <section className="box">
			  <label className="box-title" htmlFor="cb1"> {puppyList.map((pup: PuppyType) => {pup.name})}</label>
			  <label className="box-close" htmlFor="acc-close"></label>
			  <div className="box-content">{puppyList.}</div>
		    </section> */}
        <ul>
        {
        puppyList.map((pup: PuppyType) => <li className="puppyList__name" key={pup.id} onClick={detailsHandler}>{pup.name}<div className='dumbass'><p>Breed: {pup.breed}</p><p> Birth Date:  {pup.birthDate}</p></div></li>)
        }
        </ul>

    </div>
  );
}

export default List;
