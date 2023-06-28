import React, { createContext, ReactNode, useState } from "react";

export interface TypeContext {
  orderReceived: IceCream[];
  setOrderReceived: React.Dispatch<React.SetStateAction<IceCream[]>>;
  shoppingCart: IceCream[];
  setShoppingCart: React.Dispatch<React.SetStateAction<IceCream[]>>;
}

const Context = createContext<TypeContext>({
  orderReceived: [],
  setOrderReceived: () => {},
  shoppingCart: [],
  setShoppingCart: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
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
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
