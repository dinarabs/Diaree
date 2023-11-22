import { Tag } from '../services/tagService'

interface TagListProps {
  tags: Tag[]
}
const TagList = (props: TagListProps) => {
  // TODO implement handleClick
  const handleClick = (tagName: string) => {
    console.log('clicked', tagName)
  }

  return (
    <>
      {props.tags.map((tag, index) => (
        <div
          key={index}
          className="button-effect flex items-center justify-center bg-light-fucsia opacity-75 text-xl px-4 h-10 w-3/12 rounded-full shadow-sm text-white"
          onClick={() => handleClick(tag.name)}
        >
          {tag.name}
        </div>
      ))}
    </>
  )
}

export default TagList
