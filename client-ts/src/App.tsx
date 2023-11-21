import Navbar from './components/Navbar'
import AppRoutes from './Routes/Routes'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='flex flex-col items-center justify-center'>
        <AppRoutes/>
      </main>

    </>
  )
}

export default App
