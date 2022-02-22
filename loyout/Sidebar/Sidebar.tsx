import cn from 'classnames';

import { SidebarProps } from './Sidebar.props';
import { Menu } from '../Menu/Menu';

import classes from './Sidebar.module.css';

import Logo from '../logo.svg';

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, classes.sidebar)} {...props}>
      <Logo className={classes.logo} />
      <div>search</div>
      <Menu />
    </div>
  );
};
