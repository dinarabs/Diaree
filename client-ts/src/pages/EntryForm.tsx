import { useState } from 'react';
import { Link } from 'react-router-dom';
import TagsInput from 'react-tagsinput';

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
    <div className='flex flex-col justify-start shadow-md w-2/4 my-8 h-max p-4 border-2 border-light-grey rounded-lg'>
      <h2 className='text-bold text-4xl'>Create new Diaree entry</h2>
      <form>
        <div className='space-y-12'>
          <div className='border-b border-gray-900/10 pb-12'>
            <p className='mt-1 text-sm leading-6 text-gray-600'>Whether it's a cherished memory or a fleeting emotion, let the words flow freely and embrace the joy of reflection.</p>
        
            <div className='mt-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>

              <div className='col-span-full'>
                <label htmlFor='cover-photo' className='block text-sm font-medium leading-6 text-gray-900'>Cover photo</label>
                <div className='mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10'>
                  <div className='text-center'>
                    <svg className='mx-auto h-12 w-12 text-gray-300' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
                      <path fill-rule='evenodd' d='M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z' clip-rule='evenodd' />
                    </svg>
                    <div className='mt-4 flex text-sm leading-6 text-gray-600'>
                      <label htmlFor='file-upload' className='relative cursor-pointer rounded-md bg-white font-semibold text-blue focus-within:outline-none focus-within:ring-2 focus-within:ring-blue focus-within:ring-offset-2 hover:text-blue'>
                        <span>Upload a file</span>
                        <input id='file-upload' name='file-upload' type='file' className='sr-only'/>
                      </label>
                      <p className='pl-1'>or drag and drop</p>
                    </div>
                    <p className='text-xs leading-5 text-gray-600'>PNG, JPG, GIF up to 10MB</p>
                  </div>
                </div>
              </div>

              <div className='col-span-full'>
                <label htmlFor='title' className='block text-sm font-medium leadin-6 text-gray-900'>Title</label>
                <div className='mt-2'>
                  <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue sm:max-w-full'>
                    <input type='text' className='block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'/>
                  </div>
                </div>
              </div>
        
              <div className='col-span-full'>
                <label htmlFor='text' className='block text-sm font-medium leading-6 text-gray-900'>Text</label>
                <div className='mt-2'>
                  <textarea id='text' name='text' rows={textAreaRows} onChange={handleTextAreaChange} className='block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue sm:text-sm sm:leading-6'></textarea>
                </div>
              </div>

              <div className='col-span-full'>
              <label htmlFor='tags' className='block text-sm font-medium leading-6 text-gray-900'>
                Tags
              </label>

              {/* <div className='mt-2'>
                <div className='flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-blue sm:max-w-full'>
                  <input
                    type='text'
                    id='tags'
                    name='tags'
                    value={tags.join(', ')}
                    onChange={handleTagsChange}
                    className='block w-full flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                  />
                </div>
              </div> */}
            </div>
        
            </div>
          </div>
        </div>

        <div className='mt-6 flex items-center justify-center gap-x-6'>
          <button type='submit' className='rounded-md bg-blue px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue'>Create</button>
          <Link to='/home'>
            <button type='button' className='text-sm font-semibold leading-6 text-gray-900'>Cancel</button>
          </Link>
        </div>
      </form>
    </div>
    </>
  );
};

export default EntryForm;