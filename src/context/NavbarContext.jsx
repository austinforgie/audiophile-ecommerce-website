import React, { createContext, useContext, useState } from "react";

const NavbarContext = createContext();

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }) => {
  const [menuOpened, setMenuOpened] = useState(false);
  const toggleMenu = () => setMenuOpened(!menuOpened);

  return (
    <NavbarContext.Provider
      value={{
        menuOpened,
        toggleMenu,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};
