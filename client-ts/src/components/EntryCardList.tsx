import { FC } from 'react'
import { getEntriesDesc, deleteEntry, Entry } from '../services/entriesService'
import EntryCard from './EntryCard'

type EntryCardListProps = {
  entries: Entry[]
  setEntries: (entries: Entry[]) => void
}

const EntryCardList: FC<EntryCardListProps> = ({ entries, setEntries }) => {
  const handleDeleteEntry = async (entryId: string) => {
    await deleteEntry(entryId)
    const updatedEntries = await getEntriesDesc()
    setEntries(updatedEntries)
  }

  return (
    <div className="flex flex-col w-full">
      {entries.map((item: Entry) => (
        <EntryCard
          key={item._id}
          diaryEntry={item}
          onDelete={handleDeleteEntry}
        />
      ))}
    </div>
  )
}

export default EntryCardList
