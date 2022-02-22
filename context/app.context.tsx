import { createContext, PropsWithChildren, useEffect, useState } from 'react';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (menu: MenuItem[]) => void;
}

export const AppContext = createContext<IAppContext>({ menu: [], firstCategory: 0 });

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContext>) => {
  const [menuState, setMenuState] = useState(menu);

  const setMenu = (menu: MenuItem[]) => {
    setMenuState(menu);
  };

  useEffect(() => {
    setMenuState(menu);
  }, [menu]);

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
