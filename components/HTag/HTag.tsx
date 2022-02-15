import { HTagProps } from './HTag.props';
import classes from './HTag.module.css';

export const HTag = ({ tag, children }: HTagProps): JSX.Element => {
  switch (tag) {
    case 'h1':
      return <h1 className={classes.h1}>{children}</h1>;
    case 'h2':
      return <h2 className={classes.h2}>{children}</h2>;
    case 'h3':
      return <h3 className={classes.h3}>{children}</h3>;
    default:
      return <></>;
  }
};
