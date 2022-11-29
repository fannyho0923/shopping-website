import React, { createContext, useState } from "react";

export const Context = createContext({});

export const Provider = (props) => {
  const [wallet, setWallet] = useState({
    walletContext: "0xbb...e1Be",
  });

  const walletContext = {
    wallet,
    setWallet,
  };

  return (
    <Context.Provider
      value={{
        state: wallet,
        setWallet: setWallet,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export {
  Context as WalletContext,
  Provider as WalletContextProvider,
} from "./WalletContext";
