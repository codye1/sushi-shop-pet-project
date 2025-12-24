import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { store } from './reducer/store.tsx';
import './App.css';
import { StyledEngineProvider } from '@mui/material/styles';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <StrictMode>
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    </StrictMode>
  </Provider>
);
