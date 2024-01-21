import { createContext, useContext, useState } from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [data, setData] = useState('');

  const setGlobalData = (newData) => {
    setData(newData);
  };

  return (
    <DataContext.Provider value={{ data, setGlobalData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  return useContext(DataContext);
};
