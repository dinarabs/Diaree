import { FC, useState, useEffect } from 'react'
import Controls from '../components/Controls'
import EntryCardList from '../components/EntryCardList'
import TagList from '../components/TagList'
import { Tag, getTags } from '../services/tagService'

const Home: FC = () => {
  const [tagList, setTagList] = useState<Tag[]>([])

  useEffect(() => {
    const fetchTags = async () => {
      const data = await getTags()
      setTagList(data)
    }

    fetchTags()
  }, [])
  return (
    <>
      <div className="flex flex-col items-center justify-center w-2/4">
        <Controls />
        <div className="w-full flex gap-2 pl-2">
          <TagList tags={tagList} />
        </div>
        <EntryCardList />
      </div>
    </>
  )
}

export default Home
