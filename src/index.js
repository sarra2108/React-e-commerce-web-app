import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ShopContextProvider from './Context/ShopContext';

import { I18nextProvider } from 'react-i18next';
import i18n from './i18n'; // Adjust the path if necessary



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
    <ShopContextProvider>
   
        <App />
    </ShopContextProvider>
);
