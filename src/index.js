import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';
import { Provider } from 'react-redux';
import Right from './pages/right';
import Left from './pages/left';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <div className='flex'>
    <Provider store={store}>
    <App />
    <Left/>
    <Right/>
    
    </Provider>
    </div>
    
    
  </React.StrictMode>
);

