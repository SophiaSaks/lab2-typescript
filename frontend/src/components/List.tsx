import { type } from '@testing-library/user-event/dist/type';
import './List.css';

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
  return (
    <div className="puppyList">
        <ul>
        {
        puppyList.map((pup: PuppyType) => <li className="puppyList__list" key={pup.id}>{pup.name}</li>)
        }
        </ul>

    </div>
  );
}

export default List;
