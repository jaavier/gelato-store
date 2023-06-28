import React, { createContext, ReactNode, useState } from "react";

export interface TypeContext {
  shoppingCart: IceCream[];
  setShoppingCart: React.Dispatch<React.SetStateAction<IceCream[]>>;
}

const Context = createContext<TypeContext>({
  shoppingCart: [],
  setShoppingCart: () => {},
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState<IceCream[]>([]);

  const values: TypeContext = {
    shoppingCart,
    setShoppingCart,
  };
  console.log("shoppingCart", shoppingCart);

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
