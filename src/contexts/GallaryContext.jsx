import axios from "../axios";
import { createContext, useState } from "react";
import { useRouter } from "next/router";

export const GallaryContext = createContext();

export const GallaryContextProvider = ({ children }) => {
  const [currentGallary, setCurrentGallary] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const router = useRouter();

  const fetchGallary = async (uuid) => {
    await axios
      .get(`/images/${uuid}`)
      .then((res) => {
        setCurrentGallary(res.data.images);
      })
      .catch((e) => {
        console.error(e);
        router.push("/404");
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
