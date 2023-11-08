import React, { createContext, useContext, useState } from "react";

interface NavbarContextValue {
  menuOpened: boolean;
  toggleMenu(): void;
}

interface NavbarProviderProps {
  children: React.ReactNode;
}

const NavbarContext = createContext<NavbarContextValue>({
  menuOpened: false,
  toggleMenu() {},
});

export const useNavbar = () => useContext(NavbarContext);

export const NavbarProvider = ({ children }: NavbarProviderProps) => {
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
