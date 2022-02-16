import { RatingProps } from './Rating.props';
import classes from './Rating.module.css';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import StarIcon from './star.svg';

export const Rating = ({ isEditable = false, rating, setRating, ...props }: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constractRatingArray = (currentRating: number) => {
    const updatedRatingArray = ratingArray.map((r, index) => (
      <span
        onMouseEnter={isEditable ? () => constractRatingArray(index + 1) : null}
        onMouseLeave={isEditable ? () => constractRatingArray(rating) : null}
        onClick={isEditable ? () => setRating(index + 1) : null}
      >
        <StarIcon
          className={cn(classes.star, {
            [classes.filled]: index < currentRating,
            [classes.editable]: isEditable,
          })}
          tabIndex={isEditable ? 0 : -1}
        />
      </span>
    ));
    setRatingArray(updatedRatingArray);
  };

  useEffect(() => {
    constractRatingArray(rating);
  }, [rating]);

  return (
    <div {...props}>
      {ratingArray.map((start, id) => (
        <span key={id}>{start}</span>
      ))}
    </div>
  );
};
