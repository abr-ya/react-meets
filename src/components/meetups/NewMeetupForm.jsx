import React from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.scss';

const NewMeetupForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image
            <input type="url" required id="image" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">
            Address
            <input type="text" required id="address" />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">
            Description
            <textarea id="description" required rows="5" />
          </label>
        </div>
        <div className={classes.actions}>
          <button type="button">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

export default NewMeetupForm;
