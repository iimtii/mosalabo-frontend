import axios from "../axios";
import { createContext, useState, useContext } from "react";
import { ProgressBarContext } from "./ProgressBarContext";
import { sleep } from "../utils/sleep";
import { useRouter } from "next/router";
import Custom404 from "../pages/404";

export const RoomContext = createContext();

export const RoomContextProvider = ({ children }) => {
  const router = useRouter();
  const [currentRoom, setCurrentRoom] = useState(null);
  const { updateProgressBar, setIndeterminate } =
    useContext(ProgressBarContext);
  const [isLoading, setLoading] = useState(false);

  const fetchRoom = async (uuid) => {
    await axios
      .get(`/rooms/${uuid}`)
      .then((res) => {
        setCurrentRoom({ ...res.data });
        updateProgressBar(res.data);
      })
      .catch((e) => {
        console.error(e);
        router.push("/404");
      });
  };

  const updateRoom = async (data) => {
    await sleep(2000);
    setCurrentRoom({ ...data });
    updateProgressBar(data);
    setIndeterminate(true);
  };

  const createOriginalRoom = async (data) => {
    await axios
      .post(`rooms/`, {
        ...data,
      })
      .then((res) => {
        setCurrentRoom({ ...res.data });
        router.push({
          pathname: "/room/[id]",
          query: { id: res.data.uuid },
        });
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <RoomContext.Provider
      value={{
        currentRoom,
        isLoading,
        fetchRoom,
        createOriginalRoom,
        updateRoom,
        setLoading,
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
