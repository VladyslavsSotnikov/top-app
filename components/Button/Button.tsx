import { ButtonProps } from './Button.props';
import classes from './Button.module.css';
import cn from 'classnames';

export const Button = ({ appearance = 'primary', className, children, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(classes.button, className, {
        [classes.primary]: appearance === 'primary',
        [classes.ghost]: appearance === 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
