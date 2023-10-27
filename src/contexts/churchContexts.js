import { createContext } from "react";
import axios from 'axios'

const BASE_URL = "https://churchhive.net/api/church/";
// const BASE_URL = "http://localhost:3001/api/church/";

export const authHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("myChurchUserToken")}`,
});

export const ChurchContext = createContext()

export const ChurchProvider = (props) => {

  const getChurch = async (churchId) => {
    const churchIdURL = `${BASE_URL}name/${churchId}`;
    try {
      const response = await axios.get(churchIdURL);
      return await response.data;
    } catch (error) {
      throw error.response.statusText;
    }
  };

  return (
    <ChurchContext.Provider
      value={{
        getChurch
      }}
    >
      {props.children}
    </ChurchContext.Provider>
  )
}