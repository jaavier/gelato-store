import { useContext } from "react";
import { Context, TypeContext } from ".";

const useApp = (): TypeContext => {
  const appContext = useContext(Context);

  if (!appContext) {
    throw new Error("useApp debe utilizarse dentro de un ContextProvider");
  }

  return appContext;
};

export default useApp;
