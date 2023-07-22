import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import { persistor, store } from './redux/store';

import './index.css';
import { PersistGate } from 'redux-persist/integration/react';

import './i18n';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="goit-react-hw-08-phonebook">
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
