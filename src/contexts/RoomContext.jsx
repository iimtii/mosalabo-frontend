import axios from "../axios";
import { createContext, useState, useContext } from "react";
import { ProgressBarContext } from "./ProgressBarContext";
import { sleep } from "../utils/sleep";

export const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState(null);
  const { updateProgressBar, setIndeterminate } =
    useContext(ProgressBarContext);
  const [isLoading, setLoading] = useState(false);

  const fetchRoom = async (uuid) => {
    await axios.get(`/rooms/${uuid}`).then((res) => {
      setCurrentRoom({ ...res.data });
      updateProgressBar(res.data);
    });
  };

  const updateRoom = async (data) => {
    await sleep(2000);
    setCurrentRoom({ ...data });
    updateProgressBar(data);
    setIndeterminate(true);
  };

  return (
    <RoomContext.Provider
      value={{
        currentRoom,
        isLoading,
        fetchRoom,
        updateRoom,
        setLoading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
