import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from 'react-redux';
import { persist, store } from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persist={persist}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
