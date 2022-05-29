import { createContext, useState } from "react";

export const NotFoundContext = createContext();

export const NotFoundContextProvider = ({ children }) => {
  const [isNotFound, setNotFound] = useState(false);
  return (
    <NotFoundContext.Provider
      value={{
        isNotFound,
        setNotFound,
      }}
    >
      {children}
    </NotFoundContext.Provider>
  );
};
