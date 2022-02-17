import { HeaderProps } from './Header.props';
import classes from './Header.module.css';

export const Header = ({ ...props }: HeaderProps): JSX.Element => {
  return <div {...props}>Header</div>;
};
