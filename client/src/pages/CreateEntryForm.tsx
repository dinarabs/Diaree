import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {
  EntryInterface,
  postEntry,
  uploadImage,
} from '../services/entriesService'
// import TagsInput from 'react-tagsinput';
import UploadImage from '../components/UploadImage'

const EntryForm = () => {
  const navigate = useNavigate() // Initialize the usenavigate hook
  const [isUploading, setIsUploading] = useState<boolean>(false)
  const [newEntryBla, setNewEntryBla] = useState<EntryInterface>({
    _id: '',
    title: '',
    text: '',
    imageUrl: 'something',
    tags: [],
    createdAt: new Date(),
  })
  const [textAreaRows, setTextAreaRows] = useState<number>(5)

  const handleFileSelected = async (file: File) => {
    setIsUploading(true)

    await uploadImage(file)
      .then((data) => {
        console.log(data, 'I am here with DATA')
        console.log(data)

        setNewEntryBla((prevData) => ({
          ...prevData,
          imageUrl: data.imageUrl,
        }))
      })
      .finally(() => setIsUploading(false))
  }

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setNewEntryBla((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    console.log(name)
  }

  const handleTextAreaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target
    setNewEntryBla((prevData) => ({
      ...prevData,
      [name]: value,
    }))
    setTextAreaRows(5)
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const response = await postEntry(newEntryBla)
    console.log('Entry added successfully:', response)

    // Redirect to the home page after adding the entry
    navigate('/home')
    // } catch (error) {
    //   console.error('Error adding diary entry:', error)
    //   // Handle errors, show a message, or perform other actions
    // }
  }

  return (
    <>
      <div className="flex flex-col justify-start shadow-md w-2/4 my-8 h-max p-8 border-2 border-light-grey rounded-lg">
        <h2 className="font-semibold text-4xl">Create new entry</h2>
        <form onSubmit={handleSubmit}>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-md leading-6 text-gray-600">
                Whether it's a cherished memory or a fleeting emotion, let the
                words flow freely and embrace the joy of reflection.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    id="title"
                    htmlFor="title"
                    className="block text-md font-medium leadin-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-grey sm:max-w-full">
                      <input
                        type="title"
                        name="title"
                        onChange={handleInputChange}
                        className="h-12 block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    id="text"
                    htmlFor="text"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    Text
                  </label>
                  <div className="mt-2">
                    <textarea
                      id="text"
                      name="text"
                      rows={textAreaRows}
                      onChange={handleTextAreaChange}
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-grey sm:text-sm sm:leading-6"
                    ></textarea>
                  </div>
                </div>

                {/* TODO: add TagsInput section - There is a separate component for it but it's still incomplete */}
                <div className="col-span-full">
                  <label
                    id="tags"
                    htmlFor="tags"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    Tags
                  </label>
                </div>
                <UploadImage onFileSelected={handleFileSelected} />
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-x-2">
            <button
              disabled={isUploading}
              type="submit"
              className="px-16 bg-blue shadow-md rounded h-12 text-xl text-center text-white"
            >
              Save
            </button>
            <Link to="/home">
              <button
                type="button"
                className="px-12 bg-light-grey shadow-md rounded h-12 text-xl leading-6 text-gray-900"
              >
                Cancel
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default EntryForm
