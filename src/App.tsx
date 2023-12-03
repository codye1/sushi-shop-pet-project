import { BrowserRouter} from 'react-router-dom';
import Header from './pages/Header/Header';
import Routing from './components/rout/routing';
import Footer from './pages/Footer/Footer';
function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routing/>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
