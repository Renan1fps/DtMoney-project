import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer} from 'miragejs'

createServer({
  routes(){
    this.namespace = 'api';
    this.get('/transactions', ()=>{
      return [
        {
          id: 1,
          title: "Teste",
          amount: 350,
          type: "deposit",
          category: "food",
          createdAt: "07/10/2021"
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
