import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { EntryInterface } from '../services/entriesService'

type EntryProps = {
  diaryEntry: EntryInterface
}

const Entry: FC<EntryProps> = () => {
  const location = useLocation() // Use useLocation hook to get the current location
  const diaryEntry = location.state && location.state.diaryEntry // Retrieve the diaryEntry object from the state

  if (!diaryEntry) {
    return <div>Loading...</div> // Handle the case where diaryEntry is not available
  }

  return (
    <div className="flex flex-col justify-start shadow-md w-2/4 my-8 h-max p-8 border-2 border-light-grey rounded-lg gap-6">
      <img
        src={diaryEntry.imageUrl}
        alt="No image upload"
        className="h-52 object-cover rounded"
      />
      <h1 className="text-xl font-semibold ">{diaryEntry.title}</h1>
      <p className="text-sm mb-6 text-justify">{diaryEntry.text}</p>

      <div className="my-2">
        {diaryEntry.tags.map((tag: string, index: number) => (
          <div
            key={index}
            className={`inline-flex flex-wrap w-fit bg-green opacity-75 text-white rounded-full px-2 py-1 text-sm mr-3`}
          >
            {tag}
          </div>
        ))}
      </div>

      <div className="border-b border-gray-900/10 pb-4"></div>
      <div className="mt-4 flex items-center justify-center gap-x-2">
        <Link to="/form">
          <button
            type="submit"
            className="px-16 bg-blue shadow-md rounded h-12 text-md text-center text-white"
          >
            Edit
          </button>
        </Link>
        <Link to="/home">
          <button
            type="button"
            className="px-12 bg-light-grey shadow-md rounded h-12 text-md leading-6 text-gray-900"
          >
            Cancel
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Entry
