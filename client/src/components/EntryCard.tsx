import { FC } from 'react'
import { UilTimes } from '@iconscout/react-unicons'
import { EntryInterface } from '../services/entriesService' // Import the Entry type
import { useNavigate } from 'react-router-dom'
import moment from 'moment'
import { defaultImage } from '../utils/randomDefaultImage'

type EntryCardProps = {
  key: string
  diaryEntry: EntryInterface
  onDelete: (entryId: string) => void
}

const EntryCard: FC<EntryCardProps> = ({ diaryEntry, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(diaryEntry._id)
  }

  const truncatedText =
    diaryEntry.text.length > 25
      ? `${diaryEntry.text.substring(0, 25)}...`
      : diaryEntry.text

  
  const navigate = useNavigate()
  function handleClick() {
    navigate("/entry", { state: { diaryEntry } });
  }


  return (
    <div className="flex w-full rounded overflow-hidden shadow-md border-light-grey my-4">
      <img src={diaryEntry.imageUrl || defaultImage} alt="Image of the diary entry" className='h-32 w-32 object-fill scale-100 mr-4'/>
      <div className='flex justify-between w-full'>

        <div className="p-2">
          <h2 
          onClick={handleClick} 
          className="text-xl font-bold no-underline hover:underline cursor-pointer"
          >
            {diaryEntry.title}</h2>
          <h5 className="text-sm">{truncatedText}</h5>
          <div className="my-2">
            {diaryEntry.tags.map((tag, index) => (
              <div
                key={index}
                className={`inline-flex flex-wrap w-fit bg-green opacity-75 text-white rounded-full px-2 py-1 text-sm mr-3`}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 flex flex-col items-end justify-between">
          <UilTimes
            size={32}
            onClick={handleDeleteClick}
            style={{ cursor: 'pointer' }}
          />
          <h5 className="text-sm pt-4 text-grey w-fit">
            {moment.utc(diaryEntry.createdAt).format('MMMM Do, YYYY - h:mm a ')}
          </h5>
        </div>
      </div>
    </div>
  )
}

export default EntryCard
