import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';
import App from './App';
import { memoReducer } from './Store';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';

// Redux Persistの設定。
const persistConfig = {
  key: 'memo',
  storage
};

// パーシストレデューサーの作成。
const persistedReducer = persistReducer(persistConfig, memoReducer);

// ストア、パーシスターの作成。
let store = createStore(persistedReducer);
let pstore = persistStore(store);

ReactDOM.render(
  <Provider store = { store }>
    <PersistGate loading={ <p>loading...</p> }
      persistor={ pstore }>
        <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

export default pstore;
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
