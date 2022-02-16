import { ButtonProps } from './Button.props';
import ArrowIcon from './arrow.svg';
import classes from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance, arrow = 'none', className, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(classes.button, className, {
        [classes.primary]: appearance === 'primary',
        [classes.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' && (
        <span
          className={cn(classes.arrow, {
            [classes.down]: arrow === 'down',
          })}
        >
          <ArrowIcon />
        </span>
      )}
    </button>
  );
};
