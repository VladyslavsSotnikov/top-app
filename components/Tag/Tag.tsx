import { TagProps } from './Tag.props';
import classes from './Tag.module.css';
import cn from 'classnames';

export const Tag = ({ size = 's', color = 'ghost', href, className, children, ...props }: TagProps): JSX.Element => {
  return (
    <div
      className={cn(classes.tag, className, {
        [classes.s]: size === 's',
        [classes.m]: size === 'm',
        [classes.ghost]: color === 'ghost',
        [classes.red]: color === 'red',
        [classes.grey]: color === 'grey',
        [classes.green]: color === 'green',
        [classes.primary]: color === 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
