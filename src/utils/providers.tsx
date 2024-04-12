"use client"
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <div>
      <Provider store={store}>
        {children}
      </Provider>
    </div>
  );
};

export default Providers;
