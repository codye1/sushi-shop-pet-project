import { RouterProvider} from 'react-router-dom';
import router from './components/rout/routing';
import Header from './pages/Header/Header';

function App() {


  return (
    <>
      <Header/>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
