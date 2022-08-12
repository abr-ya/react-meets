import React, { useState, useEffect } from 'react';
import MeetupList from '../components/meetups/MeetupList';

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://react-meets-default-rtdb.europe-west1.firebasedatabase.app/meetups.json',
    )
      .then((res) => res.json()).then((json) => {
        const meetaps = Object.keys(json).map((id) => ({ id, ...json[id] }));
        setData(meetaps);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>loading ...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Meetups</h1>
      <MeetupList meetups={data} />
    </section>
  );
};

export default AllMeetupsPage;
