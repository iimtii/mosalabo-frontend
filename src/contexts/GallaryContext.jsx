import axios from "../axios";
import { createContext, useState } from "react";

export const GallaryContext = createContext();

export const GallaryContextProvider = ({ children }) => {
  const [currentGallary, setCurrentGallary] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const fetchGallary = async (uuid) => {
    await axios.get(`/images/${uuid}`).then((res) => {
      setCurrentGallary(res.data.images);
    });
  };

  return (
    <GallaryContext.Provider
      value={{
        currentGallary,
        isLoading,
        fetchGallary,
        setLoading,
      }}
    >
      {children}
    </GallaryContext.Provider>
  );
};
