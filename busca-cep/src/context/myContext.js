import React, { createContext } from "react";

export const GlobalContext = createContext()

const myContext = ({children}) => {

  const value = {

  }
  
  return (
    <GlobalContext.Provider value={ value }>
      { children }
    </GlobalContext.Provider>
  )
}

export default myContext
