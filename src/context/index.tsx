import React, { createContext, ReactNode, useState } from "react";

export interface TypeContext {
  orderReceived: IceCream[];
  setOrderReceived: React.Dispatch<React.SetStateAction<IceCream[]>>;
  shoppingCart: IceCream[];
  setShoppingCart: React.Dispatch<React.SetStateAction<IceCream[]>>;
  setUser: React.Dispatch<React.SetStateAction<User>>
  user?: User
}

const Context = createContext<TypeContext>({
  orderReceived: [],
  setOrderReceived: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
  setUser: () => {},
  user: undefined
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({
    name: "",
    password: "",
    role: "visitor",
    username: "",
    lastOrder: null
  })
  const [orderReceived, setOrderReceived] = useState<IceCream[]>(() =>
    JSON.parse(localStorage.getItem("orderReceived") || "[]")
  );
  const [shoppingCart, setShoppingCart] = useState<IceCream[]>(() =>
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );

  const values: TypeContext = {
    orderReceived,
    setOrderReceived,
    shoppingCart,
    setShoppingCart,
    setUser,
    user
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
