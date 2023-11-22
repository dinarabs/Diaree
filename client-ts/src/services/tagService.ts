const url = 'http://localhost:3000'

export interface Tag {
  name: string
}

export const getTags = async (): Promise<Tag[]> => {
  try {
    const data = await fetch(`${url}/tags`)
    if (!data.ok) throw new Error('Error fetching data from getTags ')
    return await data.json()
  } catch (error) {
    console.log('Error fetching data from getTags:', error)
    throw error
  }
}
