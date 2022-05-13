import axios from "../axios";
import { createContext, useState } from "react";

export const TemplateContext = createContext();

export const TemplateContextProvider = ({ children }) => {
  const [templates, setTemplates] = useState([]);

  const fetchTemplates = async () => {
    const res = await axios.get("/api/template/rooms");
    setTemplates(res.data.templates);
  };

  return (
    <TemplateContext.Provider
      value={{
        templates,
        fetchTemplates,
      }}
    >
      {children}
    </TemplateContext.Provider>
  );
};
