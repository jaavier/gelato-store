import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { createServer, Model } from 'miragejs';
import icecreams from './db/icecreams';
import "./index.css"

interface IceCream {
  name: string;
  price: number;
  description: string;
  likes: number;
  image: string;
}

const server = createServer({
  models: {
    icecream: Model, // Define the model for ice creams
  },

  routes() {
    this.namespace = 'api';
    this.get('/icecreams', (schema: any): IceCream[] => {
      return schema.all('icecream');
    });
  },
});

// Seed initial data
server.db.loadData({
  icecreams
});


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
