import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import {createServer, Model} from 'miragejs';

createServer({
  models:{
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions:[
        {
          id: 1,
          title: 'Cadeira alpha gamer',
          type: 'withdraw',
          category: 'Despesas',
          amount: 920,
          createdAt: new Date('2021-10-12 01:40:00'),
        },
        {
          id: 2,
          title: 'Salário',
          type: 'deposit',
          category: 'Trabalho',
          amount: 1200,
          createdAt: new Date('2021-02-12 13:40:00'),
        },
      ]
    });
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', ()=>{
      return this.schema.all('transaction')
    });

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  }
  
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
