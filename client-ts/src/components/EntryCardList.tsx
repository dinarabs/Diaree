import { FC } from "react"
import { Link } from 'react-router-dom'
import EntryCard from './EntryCard'

const EntryCardList: FC = () => {
  return (
    <div className='flex flex-col w-full'>
      <Link to='/entry'>
        <EntryCard/>
        <EntryCard/>
      </Link>

    </div>
  );
};


export default EntryCardList