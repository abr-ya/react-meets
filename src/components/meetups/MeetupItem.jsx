import React from 'react';
import PropTypes from 'prop-types';

import Card from '../ui/Card';
import classes from './MeetupItem.module.scss';

const MeetupItem = ({
  image, title, address, description,
}) => (
  <li className={classes.item}>
    <Card>
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
          <button type="button">To Favorites</button>
        </div>
      </>
    </Card>
  </li>
);

MeetupItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default MeetupItem;
