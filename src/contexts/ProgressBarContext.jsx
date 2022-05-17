import { createContext, useState } from "react";
import { sleep } from "../utils/sleep";

export const ProgressBarContext = createContext();

export const ProgressBarContextProvider = ({ children }) => {
  const [hasStripe, setStripe] = useState(false);
  const [progressValue, setProgressValue] = useState(0);
  const [isIndeterminate, setIndeterminate] = useState(false);

  const getProgressRate = (data) => {
    return Number((data.numberOfImage / data.maximumImage) * 100);
  };

  const updateProgressBar = async (data) => {
    setStripe(true);
    await sleep(1000);
    setProgressValue(getProgressRate(data));
    setStripe(false);
    setIndeterminate(false);
  };

  return (
    <ProgressBarContext.Provider
      value={{
        hasStripe,
        progressValue,
        isIndeterminate,
        updateProgressBar,
        setIndeterminate,
      }}
    >
      {children}
    </ProgressBarContext.Provider>
  );
};
