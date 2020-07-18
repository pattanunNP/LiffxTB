import React from "react";

export const StoreContext = React.createContext({});

export const StoreContextProvider = ({ children }) => {
  const [information, setInformation] = React.useState({
    firstName: undefined,
    lastName: undefined,
    nickname: undefined,
  });
  const [account, setAccount] = React.useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const store = {
    information: [information, setInformation],
    account: [account, setAccount],
  };
  console.log(store);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
