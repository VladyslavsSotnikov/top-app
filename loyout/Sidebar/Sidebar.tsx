import { SidebarProps } from './Sidebar.props';
import classes from './Sidebar.module.css';

export const Sidebar = ({ ...props }: SidebarProps): JSX.Element => {
  return <div {...props}>Sidebar</div>;
};
