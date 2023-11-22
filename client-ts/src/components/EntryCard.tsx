import { FC } from 'react'
import { Link } from 'react-router-dom'
import { UilTimes } from '@iconscout/react-unicons'
import { Entry } from '../services/entriesService' // Import the Entry type
import moment from 'moment'

type EntryCardProps = {
  key: string
  diaryEntry: Entry
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

  return (
    <div className="flex items-start justify-between shadow-md w-full mx-0 my-4 h-32 p-4 border-2 border-light-grey rounded-lg">
      <div className="flex-shrink-0 flex flex-col">
        <Link to="/entry" className="no-underline hover:underline ">
          <h2 className="text-xl font-bold">{diaryEntry.title}</h2>
        </Link>
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

      <div className="flex flex-col items-end">
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
  )
}

export default EntryCard
