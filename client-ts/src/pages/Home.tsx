import Controls from '../components/Controls'
import EntryCardList from '../components/EntryCardList'
import Tags from '../components/Tags'

const Home = () => {

  return (
    <>
    <div className='flex flex-col items-center justify-center w-2/4'>
      <Controls />
      <div className='w-full flex gap-2 pl-2'>
        <Tags/>
      </div>
      <EntryCardList/>
    </div>
    </>
  )
}

export default Home
