import { useContext } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';

import { AppContext } from '../../context/app.context';

import { PageItem } from '../../interfaces/menu.interface';

import { firstLevelCategory } from '../../helpers/helpers';

import classes from './Menu.module.css';

export const Menu = (): JSX.Element => {
  const { menu, firstCategory, setMenu } = useContext(AppContext);
  const router = useRouter();

  const onSecondCategoryClick = (secondCategory: string) => {
    setMenu(
      menu.map((m) => {
        if (m._id.secondCategory === secondCategory) {
          m.isOpened = !m.isOpened;
        }

        return m;
      })
    );
  };

  const buildFirstLevel = () => {
    return (
      <>
        {firstLevelCategory.map((menuItem) => {
          const isFirstLevelMenuItemActive = menuItem.id === firstCategory;

          return (
            <div key={menuItem.route}>
              <Link href={`/${menuItem.route}`}>
                <a>
                  <div
                    className={cn(classes.firstLevel, {
                      [classes.firstLevelActive]: isFirstLevelMenuItemActive,
                    })}
                  >
                    {menuItem.icon}
                    <span>{menuItem.name}</span>
                  </div>
                </a>
              </Link>
              {isFirstLevelMenuItemActive && buildSecondLevel(menuItem.route)}
            </div>
          );
        })}
      </>
    );
  };

  const buildSecondLevel = (route: string) => {
    return (
      <div className={classes.secondCategoryWrapper}>
        {menu.map((menuItem) => {
          if (menuItem.pages.map((m) => m.alias).includes(router.asPath.split('/')[2])) {
            menuItem.isOpened = true;
          }

          return (
            <div key={menuItem._id.secondCategory}>
              <div className={classes.secondLevel} onClick={() => onSecondCategoryClick(menuItem._id.secondCategory)}>
                {menuItem._id.secondCategory}
              </div>
              <div
                className={cn(classes.secondLevelBlock, {
                  [classes.secondLevelBlockOpened]: menuItem.isOpened,
                })}
              >
                {buildThirdLevel(menuItem.pages, route)}
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <div>
        {pages.map((page) => (
          <Link key={page._id} href={`/${route}/${page.alias}`}>
            <a
              className={cn(classes.thirdLevel, {
                [classes.thirdLevelActive]: `/${route}/${page.alias}` === router.asPath,
              })}
            >
              {page.title}
            </a>
          </Link>
        ))}
      </div>
    );
  };

  return <div>{buildFirstLevel()}</div>;
};
