import { PTagProps } from './PTag.props';
import classes from './PTag.module.css';
import cn from 'classnames';

export const PTag = ({ size = 'm', children }: PTagProps): JSX.Element => {
  return (
    <p
      className={cn(classes.pTag, {
        [classes.s]: size === 's',
        [classes.m]: size === 'm',
        [classes.l]: size === 'l',
      })}
    >
      {children}
    </p>
  );
};
