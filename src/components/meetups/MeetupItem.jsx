import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';
import LikeContext from '../../context/LikeContext';

const MeetupItem = ({
  id, image, title, address, description,
}) => {
  const { hasLike, addLike, unLike } = useContext(LikeContext);
  const itemHasLike = hasLike(id);
  console.log(id, itemHasLike);

  const likeClickHandler = () => {
    console.log('like click handler');
    if (itemHasLike) {
      unLike(id);
    } else {
      addLike({
        id, image, title, address, description,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        {/* видимо это костыль - для card надо продумать несколько children - todo! */}
        <>
          <div className={classes.image}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
            <p>{description}</p>
          </div>
          <div className={classes.actions}>
            <button type="button" onClick={likeClickHandler}>
              {itemHasLike ? 'Remove from Favorites' : 'To Favorites'}
            </button>
          </div>
        </>
      </Card>
    </li>
  );
};

MeetupItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupItem;
