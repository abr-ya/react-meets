import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.scss';

const NewMeetupForm = ({ submitData }) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const meetupData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };

    submitData(meetupData);
  };

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="title">
            Meetup Title
            <input type="text" required id="title" ref={titleInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="image">
            Meetup Image
            <input type="url" required id="image" ref={imageInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="address">
            Address
            <input type="text" required id="address" ref={addressInputRef} />
          </label>
        </div>
        <div className={classes.control}>
          <label htmlFor="description">
            Description
            <textarea id="description" required rows="5" ref={descriptionInputRef} />
          </label>
        </div>
        <div className={classes.actions}>
          <button type="submit">
            Add Meetup
          </button>
        </div>
      </form>
    </Card>
  );
};

NewMeetupForm.propTypes = {
  submitData: PropTypes.func.isRequired,
};

export default NewMeetupForm;
