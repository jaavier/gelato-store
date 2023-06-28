import React, { createContext, ReactNode } from "react";

export interface TypeContext {
  shoppingCart: IceCream[];
}

const Context = createContext<TypeContext>({
  shoppingCart: [],
});

interface ContextProviderProps {
  children: ReactNode;
}

const ContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const values: TypeContext = {
    shoppingCart: [],
  };

  return <Context.Provider value={values}>{children}</Context.Provider>;
};

export { Context, ContextProvider };
