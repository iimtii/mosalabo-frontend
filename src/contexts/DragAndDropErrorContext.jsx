import { createContext, useState } from "react";

export const DragAndDropErrorContext = createContext();

export const DragAndDropErrorContextProvider = ({ children }) => {
  const [hasOverNumberError, setOverNumberError] = useState(false);

  return (
    <DragAndDropErrorContext.Provider
      value={{
        hasOverNumberError,
        setOverNumberError,
      }}
    >
      {children}
    </DragAndDropErrorContext.Provider>
  );
};
