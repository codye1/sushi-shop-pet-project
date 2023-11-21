import { BrowserRouter} from 'react-router-dom';
import Header from './pages/Header/Header';
import Routing from './components/rout/routing';

function App() {

  return (
    <BrowserRouter>
      <Header/>
      <Routing/>
    </BrowserRouter>
  )
}

export default App
