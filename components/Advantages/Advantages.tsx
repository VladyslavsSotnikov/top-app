import CheckIcon from './check.svg';

import { AdvantagesProps } from './Advantages.props';

import classes from './Advantages.module.css';
import { PTag } from '..';

export const Advantages = ({ advantages }: AdvantagesProps): JSX.Element => {
  return (
    <div>
      {advantages.map((a) => (
        <div className={classes.advantage} key={a._id}>
          <CheckIcon />
          <div className={classes.title}>{a.title}</div>
          {a.discription && (
            <>
              <hr className={classes.vline} />
              <PTag size='l'>{a.discription}</PTag>
            </>
          )}
        </div>
      ))}
    </div>
  );
};
