import React from 'react';
import PropTypes from 'prop-types';
import classes from './MeetupItem.module.scss';

function MeetupItem({
  image, title, address, description,
}) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={image} alt={title} />
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={classes.actions}>
        <button type="button">To Favorites</button>
      </div>
    </li>
  );
}

MeetupItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupItem;
