import { createContext, PropsWithChildren, useState } from "react";

export interface IAppContext {
  menu?: string;
}

export const AppContext = createContext<IAppContext>({});

export const AppProvider = ({ children }: PropsWithChildren<IAppContext>) => {
  const [first, setfirst] = useState("");

  return (
    <AppContext.Provider value={{ menu: "123" }}>
      {children}
    </AppContext.Provider>
  );
};
