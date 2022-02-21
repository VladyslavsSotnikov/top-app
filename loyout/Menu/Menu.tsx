import classes from './Menu.module.css';
import cn from 'classnames';
import { useContext } from 'react';
import { AppContext } from '../../context/app.context';

export const Menu = (): JSX.Element => {
  const { menu } = useContext(AppContext);

  return (
    <ul>
      {menu.map((menu) => (
        <li key={menu._id.secondCategory}>{menu._id.secondCategory}</li>
      ))}
    </ul>
  );
};
