import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import gameReducer from "./components/features/game";
import inventoryReducer from "./components/features/inventory";
import gameItemReducer from "./components/features/gameItem";
import actionReducer from "./components/features/action";
import characterReducer from "./components/features/character";

const store = configureStore({
  reducer: {
    game: gameReducer,
    inventory: inventoryReducer,
    gameItem: gameItemReducer,
    action: actionReducer,
    character: characterReducer,
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);


