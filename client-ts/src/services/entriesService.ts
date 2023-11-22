const url = 'http://localhost:3000'

export interface Entry {
  _id: string
  title: string
  text: string
  imageUrl: string
  tags: string[]
  createdAt: Date
}

const getEntries = async (): Promise<Entry[]> => {
  try {
    const data = await fetch(`${url}/entries/asc`)
    const res: Entry[] = await data.json()
    return res
  } catch (error) {
    console.log('Error fetching data from getEntries:', error)
    throw error
  }
}


const deleteEntry = async (entryId: string): Promise<void> => {
  try {
    const data = await fetch(`${url}/entries/delete/${entryId}`, {
      method: 'DELETE'
    })
    console.log({deleteEntry: data})

    if (!data.ok){
      throw new Error(`Request failed with status ${data.status}`)
    }
    
  } catch (error) {
    console.log('Error fetching data from deleteEntry:', error)
    throw error
  }
}




export { getEntries, deleteEntry }
