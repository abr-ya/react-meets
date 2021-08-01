import React from 'react';
import PropTypes from 'prop-types';
import MeetupItem from './MeetupItem';
import classes from './MeetupList.module.scss';

function MeetupList({ meetups }) {
  return (
    <ul className={classes.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          id={meetup.id}
          image={meetup.image}
          title={meetup.title}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

MeetupList.propTypes = {
  meetups: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string,
    id: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    address: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
};

export default MeetupList;
