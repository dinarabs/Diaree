import React, {
  useState,
  // useEffect
} from 'react'
// import { getTags, addTag, deleteTag } from "../../ApiService";
// import Tag from "../Tag/Tag";

interface TagManagementProps {
  tags: TagType[]
  setTags: React.Dispatch<React.SetStateAction<TagType[]>>
}

interface TagType {
  _id: string
  // Add any other properties your tag may have
}

const TagManagement: React.FC<TagManagementProps> = () =>
  // { tags, setTags }
  {
    const [newTagName, setNewTagName] = useState<string>('')

    // useEffect(() => {
    //   fetchTags();
    // }, []);

    // const fetchTags = async () => {
    //   try {
    //     const myTags: TagType[] = await getTags();
    //     setTags(myTags);
    //   } catch (error) {
    //     console.error("Error fetching tags:", error);
    //   }
    // };

    // const handleAddTag = async () => {
    //   try {
    //     const addedTag: TagType = await addTag(newTagName);
    //     setTags([...tags, addedTag]);
    //     setNewTagName("");
    //   } catch (error) {
    //     console.error("Error adding tag:", error);
    //   }
    // };

    // const handleDeleteTag = async (tagToDelete: TagType) => {
    //   try {
    //     await deleteTag(tagToDelete._id);
    //     setTags(tags.filter((tag) => tag._id !== tagToDelete._id));
    //   } catch (error) {
    //     console.error("Error deleting tag:", error);
    //   }
    // };

    return (
      <div className="tag-management-container">
        <div className="tag-list-container">
          <div className="tag-management-input">
            <input
              type="text"
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
              className="w-2/3 px-2 py-1 border border-gray-400 rounded"
            />
            <button
              // onClick={handleAddTag}
              className="bg-blue-500 text-white rounded px-3 py-1 hover:bg-blue-700"
            >
              Add Tag
            </button>
          </div>
          {/* {tags.map((tag) => (
          <Tag
            key={tag._id}
            tag={tag}
            onDelete={handleDeleteTag}
            className="bg-blue-500 text-white rounded px-3 py-1 mb-2 hover:bg-blue-700"
          />
        ))} */}
        </div>
      </div>
    )
  }

export default TagManagement
