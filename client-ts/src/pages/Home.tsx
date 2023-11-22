import { FC, useState, useEffect } from 'react'
import Controls from '../components/Controls'
import EntryCardList from '../components/EntryCardList'
import TagList from '../components/TagList'
import { Tag, getTags } from '../services/tagService'
import { getEntriesDesc, Entry } from '../services/entriesService'

const Home: FC = () => {
  const [tagList, setTagList] = useState<Tag[]>([])
  const [entries, setEntries] = useState<Entry[]>([])
  const [selectedTag, setSelectedTag] = useState<string>('')
  const [filteredEntries, setFilteredEntries] = useState<Entry[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags()
      setTagList(data)
    }

    fetchTags()
  }, [])

  useEffect(() => {
    const loadEntries = async () => {
      const data = await getEntriesDesc()
      setEntries(data)
      setFilteredEntries(data) // Initialize filteredEntries with all entries
    }

    loadEntries()
  }, [])

  useEffect(() => {
    const filterEntries = () => {
      if (selectedTag) {
        const filteredData = entries.filter((entry: Entry) =>
          entry.tags.includes(selectedTag)
        )
        setFilteredEntries(filteredData)
      } else {
        // If no tag is selected, show all entries
        setFilteredEntries(entries)
      }
    }

    filterEntries()
  }, [selectedTag, entries])

  return (
    <>
      <div className="flex flex-col items-center justify-center w-2/4">
        <Controls />
        <div className="self-start flex gap-2 pl-2">
          <TagList
            tags={tagList}
            selectedTag={selectedTag}
            setSelectedTag={setSelectedTag}
          />
        </div>
        <EntryCardList entries={filteredEntries} setEntries={setEntries} />
      </div>
    </>
  )
}

export default Home
