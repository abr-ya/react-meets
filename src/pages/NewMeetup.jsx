import React from 'react';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {
  const submitHandler = (data) => {
    fetch(
      'https://react-meets-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
      {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
  };

  return (
    <section>
      <h1>Add Meetup Page</h1>
      <NewMeetupForm submitData={submitHandler} />
    </section>
  );
};

export default NewMeetupPage;
