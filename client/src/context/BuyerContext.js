import React, { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";

const BuyerContext = createContext();

const BuyerProvider = ({ children }) => {

    const [logInPerson, setLogInPerson]=useState({});
    const [owner, setOwner]=useState({});

    return (
      <BuyerContext.Provider value={{ logInPerson, setLogInPerson, owner, setOwner}}>{children}</BuyerContext.Provider>
    );
  };

  export { BuyerProvider, BuyerContext };
  