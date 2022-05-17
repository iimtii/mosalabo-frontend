import { createContext, useState } from "react";

export const ProgressBarContext = createContext();

export const ProgressBarContextProvider = ({ children }) => {
  const [hasStripe, setStripe] = useState(false);
  const [progressValue, setProgressValue] = useState(0);

  const getProgressRate = (data) => {
    return Number((data.numberOfImage / data.maximumImage) * 100);
  };

  const updateProgressBar = (data) => {
    setStripe(true);
    setProgressValue(getProgressRate(data));
    setStripe(false);
  };

  return (
    <ProgressBarContext.Provider
      value={{
        hasStripe,
        progressValue,
        updateProgressBar,
      }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};
