import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './stateManagement';
import WeatherApp from './WeatherApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <WeatherApp />
    </Provider>
  </React.StrictMode>
);