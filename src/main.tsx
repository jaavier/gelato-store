import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { createServer, Model, Request, Response } from "miragejs";
import icecreams from "./db/icecreams";
import users from "./db/users";
import "./index.css";

const server = createServer({
  models: {
    icecream: Model, // Define the model for ice creams
  },

  routes() {
    this.namespace = "api";
    this.post("/login", (schema: any, request: Request): any => {
      const body = JSON.parse(request.requestBody);
      const results: User[] = schema.db.users.where({
        username: body.username,
        password: body.password,
      });
      if (results.length > 0) {
        const user = results.pop() as User;
        if (user.role === "banned") {
          return new Response(400, { error: "You're banned." });
        }
        return {
          role: user.role,
          name: user.name,
          lastOrder: user.lastOrder,
        };
      } else {
        return new Response(400, {}, { error: "Verify your credentials" });
      }
    });
    this.get("/icecreams", (schema: any): Record<string, any> => {
      const icecreams: any = schema.db.icecreams.pop();
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
  users,
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
