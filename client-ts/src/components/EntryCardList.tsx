import { FC, useState, useEffect } from 'react'
import { getEntries, deleteEntry, Entry } from '../services/entriesService'
import EntryCard from './EntryCard'

const EntryCardList: FC = () => {

  const [entries, setEntries] = useState<Entry[]>([])

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntries()
      setEntries(data)
    }

    loadEntries() 
  }, [])


  const handleDeleteEntry = async (entryId: string) => {
    await deleteEntry(entryId)
    const updatedEntries = await getEntries()
    setEntries(updatedEntries)
  }


  return (
    <div className="flex flex-col w-full">
        {entries.length && entries.map((item) => (
          <EntryCard key={item._id} diaryEntry={item} onDelete={handleDeleteEntry} />
        ))}
    </div>
  )
}

export default EntryCardList
