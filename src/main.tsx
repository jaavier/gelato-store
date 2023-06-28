import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createServer, Model, Server } from "miragejs";
import icecreams from "./db/icecreams";
import "./index.css";

const server = createServer({
  models: {
    icecream: Model, // Define the model for ice creams
  },

  routes() {
    this.namespace = "api";
    this.get("/icecreams", (schema: Server<IceCream>): Record<string, any> => {
      const icecreams: any = schema.db.icecreams.where({}).pop();
      console.log("🚀 ~ file: main.tsx:18 ~ this.get ~ icecreams:", icecreams);
      const output: Record<string, any> = {};
      const categories = Object.keys(icecreams);
      for (const category of categories) {
        const items = icecreams[category];
        for (const item of items) {
          if (output.hasOwnProperty(item.category)) {
            output[item.category].push(item);
          } else {
            if (item.category) output[item.category] = [item];
          }
        }
      }
      return output;
    });
  },
});

// Seed initial data
server.db.loadData({
  icecreams,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
