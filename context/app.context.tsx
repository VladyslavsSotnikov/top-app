import { createContext, PropsWithChildren, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: number;
  setMenu?: (menu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: 0 });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState(menu);

  const setMenu = (menu: MenuItem[]) => {
    setMenuState(menu);
  };

  return (
    <AppContext.Provider
      value={{
        menu: menuState,
        firstCategory,
        setMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
