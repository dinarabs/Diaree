import { useState } from 'react';
import { Link } from 'react-router-dom';
// import TagsInput from 'react-tagsinput';
import UploadImage from '../components/UploadImage';

const EntryForm = () => {

  // const [tags, setTags] = useState<string[]>([]);
  const [textAreaRows, setTextAreaRows] = useState<number>(5); // Set an initial value for rows

  // const handleTagsChange = (tags: string[]) => {
  //   setTags(tags);
  // };

  const handleTextAreaChange = () => {
    // You can adjust the logic for dynamically setting rows based on content if needed
    setTextAreaRows(5); // Set a fixed number or adjust based on content
  };

  return (
    <>
      <div className="flex flex-col justify-start shadow-md w-2/4 my-8 h-max p-8 border-2 border-light-grey rounded-lg">
        <h2 className="font-semibold text-4xl">Create new entry</h2>
        <form>
          <div className="space-y-12">
            <div className="border-b border-gray-900/10 pb-12">
              <p className="mt-1 text-md leading-6 text-gray-600">
                Whether it's a cherished memory or a fleeting emotion, let the
                words flow freely and embrace the joy of reflection.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <UploadImage />

                <div className="col-span-full">
                  <label
                    htmlFor="title"
                    className="block text-md font-medium leadin-6 text-gray-900"
                  >
                    Title
                  </label>
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-grey sm:max-w-full">
                      <input
                        type="text"
                        className="h-12 block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-span-full">
                  <label
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
                    htmlFor="tags"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    Tags
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-x-2">
            <Link to="/form">
              <button
                type="submit"
                className="px-16 bg-blue shadow-md rounded h-12 text-xl text-center text-white"
              >
                Edit
              </button>
            </Link>
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
};

export default EntryForm;