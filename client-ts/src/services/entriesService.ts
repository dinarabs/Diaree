const url = 'http://localhost:3000'

export interface EntryInterface {
  _id: string
  title: string
  text: string
  imageUrl: string
  tags: string[]
  createdAt: Date
}

const getEntriesDesc = async (): Promise<EntryInterface[]> => {
  try {
    const data = await fetch(`${url}/entries/desc`)
    const res: EntryInterface[] = await data.json()
    return res
  } catch (error) {
    console.log('Error fetching data from getEntriesDesc:', error)
    throw error
  }
}

const deleteEntry = async (entryId: string): Promise<void> => {
  try {
    const data = await fetch(`${url}/entries/delete/${entryId}`, {
      method: 'DELETE',
    })
    console.log({ deleteEntry: data })

    if (!data.ok) {
      throw new Error(`Request failed with status ${data.status}`)
    }
  } catch (error) {
    console.log('Error fetching data from deleteEntry:', error)
    throw error
  }
}

const postEntry = async (newEntry: EntryInterface): Promise<EntryInterface> => {
  try {
    console.log(newEntry)
    const data = await fetch(`${url}/entries/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newEntry),
    })

    console.log({ postData: data })

    if (!data.ok) {
      throw new Error(`Request failed with status ${data.status}`)
    }
    return await data.json()
  } catch (error) {
    console.error('Error adding diary entry:', error)
    throw error
  }
}

/*
router.post('/entries/upload-image', upload.single('image'), uploadImage)

*/

const uploadImage = async (newEntry): Promise<EntryInterface> => {
  // console.log(newEntry
  try {
    // Assuming newEntry has an 'image' property with the image data
    const formData = new FormData()

    formData.append('image', newEntry)
    console.log(formData)
    const uploadData = await fetch(`${url}/entries/upload-image`, {
      method: 'POST',
      body: formData,
    })

    if (!uploadData.ok) {
      throw new Error(`Image upload failed with status ${uploadData.status}`)
    }

    return await uploadData.json()
  } catch (error) {
    console.error('Error adding diary entry:', error)
    throw error
  }
}

export { deleteEntry, getEntriesDesc, postEntry, uploadImage }
