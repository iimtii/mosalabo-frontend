import axios from "../axios";
import { createContext, useState } from "react";

export const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
  const [currentRoom, setCurrentRoom] = useState({});

  const fetchRoom = async (uuid) => {
    const res = await axios.get(`/api/rooms/${uuid}`);
    setCurrentRoom({ ...res.data });
  };

  return (
    <RoomContext.Provider
      value={{
        currentRoom,
        fetchRoom,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
