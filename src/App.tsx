import React from 'react';
import classes from './Style.module.scss'
import {Provider, useDispatch, useSelector} from "react-redux";
import { store } from "./store"
import Test from "./components/first"

function App() {

  return (
      <Provider store={store}>
    <div className="App">
      <header className="App-header">
        <p className={classes.style}>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test />
      </header>
    </div>
      </Provider>
  );
}

export default App;
