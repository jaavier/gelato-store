import React, { createContext, ReactNode, useEffect, useState } from "react";

export interface TypeContext {
  orderReceived: IceCream[];
  setOrderReceived: React.Dispatch<React.SetStateAction<IceCream[]>>;
  shoppingCart: IceCream[];
  setShoppingCart: React.Dispatch<React.SetStateAction<IceCream[]>>;
  setToken: React.Dispatch<React.SetStateAction<string | null>>;
  setUser: React.Dispatch<React.SetStateAction<User>>;
  token: string | null;
  user: User;
}

const Context = createContext<TypeContext>({
  orderReceived: [],
  setOrderReceived: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
  setToken: () => {},
  setUser: () => {},
  token: null,
  user: {
    name: "",
    password: "",
    role: "visitor",
    username: "",
    lastOrder: null,
    token: "",
  },
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [token, setToken] = useState<string | null>(
    () => localStorage.getItem("token") || null
  );
  const [user, setUser] = useState<User>({
    lastOrder: null,
    name: "",
    password: "",
    role: "visitor",
    token: "",
    username: "",
  });
  const [orderReceived, setOrderReceived] = useState<IceCream[]>(() =>
    JSON.parse(localStorage.getItem("orderReceived") || "[]")
  );
  const [shoppingCart, setShoppingCart] = useState<IceCream[]>(() =>
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  useEffect(() => {
    if (token) localStorage.setItem("token", token);
  }, [token]);

  const values: TypeContext = {
    orderReceived,
    setOrderReceived,
    shoppingCart,
    setShoppingCart,
    setToken,
    setUser,
    token,
    user,
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
