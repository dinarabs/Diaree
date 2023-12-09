import { FC } from 'react'
import { Tag } from '../services/tagService'

type TagListProps = {
  selectedTag: string
  setSelectedTag: (tagName: string) => void
  tags: Tag[]
}
const TagList: FC<TagListProps> = ({ selectedTag, setSelectedTag, tags }) => {
  const handleClick = (tagName: string) => {
    if (selectedTag === tagName) {
      setSelectedTag('')
    } else {
      setSelectedTag(tagName)
    }
  }

  return (
    <>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <div
            key={index}
            className={`button-effect flex flex-wrap items-center justify-center bg-light-fucsia opacity-75 text-md px-4 h-10 rounded-full shadow-md text-white`}
            onClick={() => handleClick(tag.name)}
          >
            {tag.name}
          </div>
        ))}
      </div>
    </>
  )
}

export default TagList
