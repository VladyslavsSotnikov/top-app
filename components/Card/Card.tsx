import cn from 'classnames';

import { CardProps } from './Card.props';

import classes from './Card.module.css';

export const Card = ({ color = 'white', className, children, ...props }: CardProps): JSX.Element => {
  return (
    <div
      className={cn(classes.card, className, {
        [classes.blue]: color === 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
